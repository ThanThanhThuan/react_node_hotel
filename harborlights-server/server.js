const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// 1. Get All Rooms (For Rooms Page & Dropdowns)
app.get("/api/rooms", async (req, res) => {
    try {
        const allRooms = await pool.query("SELECT * FROM room_categories ORDER BY id ASC");
        res.json(allRooms.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// 2. Get Specific Room by Slug with Dynamic Availability (For RoomSingle Page)
app.get("/api/rooms/:slug", async (req, res) => {
    try {
        const { slug } = req.params;

        // 1. Get Room Details
        const roomRes = await pool.query("SELECT * FROM room_categories WHERE slug = $1", [slug]);

        if (roomRes.rows.length === 0) {
            return res.status(404).json({ msg: "Room not found" });
        }

        const room = roomRes.rows[0];

        // 2. Count active bookings for TODAY
        // Logic: A room is occupied if today is on or after check_in AND strictly before check_out
        const bookingCountRes = await pool.query(
            `SELECT COUNT(*) FROM bookings 
       WHERE room_category_id = $1 
       AND check_in <= CURRENT_DATE 
       AND check_out > CURRENT_DATE`,
            [room.id]
        );

        const activeBookings = parseInt(bookingCountRes.rows[0].count);

        // 3. Calculate Available Quantity
        const availableQuantity = room.total_quantity - activeBookings;

        // 4. Attach to response object
        // Ensure we don't return negative numbers (just in case of overbooking DB errors)
        room.available_quantity = availableQuantity > 0 ? availableQuantity : 0;

        res.json(room);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// 3. Check Availability & Book
app.post("/api/book", async (req, res) => {
    try {
        const { room_category_id, check_in, check_out, guest_count, email } = req.body;

        // A. Check if enough rooms are available for these dates
        // Logic: Total Rooms - Booked Rooms (overlapping dates) > 0
        const bookedQuery = `
      SELECT COUNT(*) FROM bookings 
      WHERE room_category_id = $1 
      AND (check_in < $3 AND check_out > $2)
    `;

        const bookedCountRes = await pool.query(bookedQuery, [room_category_id, check_in, check_out]);
        const bookedCount = parseInt(bookedCountRes.rows[0].count);

        const totalRoomsRes = await pool.query("SELECT total_quantity FROM room_categories WHERE id = $1", [room_category_id]);
        const totalRooms = totalRoomsRes.rows[0].total_quantity;

        if (bookedCount >= totalRooms) {
            return res.status(400).json({ success: false, message: "No rooms available for these dates." });
        }

        // B. Create Booking
        const newBooking = await pool.query(
            "INSERT INTO bookings (room_category_id, check_in, check_out, guest_count, email) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [room_category_id, check_in, check_out, guest_count, email]
        );

        res.json({ success: true, message: "Booking confirmed!", booking: newBooking.rows[0] });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});