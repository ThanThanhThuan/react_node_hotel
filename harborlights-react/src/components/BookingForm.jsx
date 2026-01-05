/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Import the library

const BookingForm = () => {
    const [rooms, setRooms] = useState([]);
    const [formData, setFormData] = useState({
        check_in: '',
        check_out: '',
        room_category_id: '',
        guest_count: '1'
    });
    const [selectedRoomMaxGuests, setSelectedRoomMaxGuests] = useState(6);

    useEffect(() => {
        fetch('http://localhost:5000/api/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                if (data.length > 0) setFormData(prev => ({ ...prev, room_category_id: data[0].id }));
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const room = rooms.find(r => r.id === parseInt(formData.room_category_id));
        if (room) {
            setSelectedRoomMaxGuests(room.max_adults);
        }
    }, [formData.room_category_id, rooms]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/book', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    email: 'guest@example.com'
                })
            });
            const result = await response.json();

            if (result.success) {
                // Friendly Success Message
                Swal.fire({
                    title: 'Booking Confirmed!',
                    text: 'We are looking forward to your stay at Harbor Lights.',
                    icon: 'success',
                    confirmButtonColor: '#21cc7a', // Matches your theme green
                    confirmButtonText: 'Great!'
                });
            } else {
                // Friendly Error Message
                Swal.fire({
                    title: 'Availability Issue',
                    text: result.message || 'We could not book the room for these dates.',
                    icon: 'error',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Try different dates'
                });
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                title: 'System Error',
                text: 'Something went wrong. Please check your connection.',
                icon: 'warning',
                confirmButtonColor: '#21cc7a'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form aside-stretch">
            {/* ... keeping the rest of your form HTML exactly the same ... */}
            <div className="row">
                <div className="col-md d-flex py-md-4">
                    <div className="form-group align-self-stretch d-flex align-items-end">
                        <div className="wrap align-self-stretch py-3 px-4">
                            <label>Check-in Date</label>
                            <input type="date" name="check_in" className="form-control" onChange={handleChange} required />
                        </div>
                    </div>
                </div>
                <div className="col-md d-flex py-md-4">
                    <div className="form-group align-self-stretch d-flex align-items-end">
                        <div className="wrap align-self-stretch py-3 px-4">
                            <label>Check-out Date</label>
                            <input type="date" name="check_out" className="form-control" onChange={handleChange} required />
                        </div>
                    </div>
                </div>
                <div className="col-md d-flex py-md-4">
                    <div className="form-group align-self-stretch d-flex align-items-end">
                        <div className="wrap align-self-stretch py-3 px-4">
                            <label>Room</label>
                            <div className="form-field">
                                <div className="select-wrap">
                                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                    <select name="room_category_id" className="form-control" onChange={handleChange}>
                                        {rooms.map(room => (
                                            <option key={room.id} value={room.id}>{room.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md d-flex py-md-4">
                    <div className="form-group align-self-stretch d-flex align-items-end">
                        <div className="wrap align-self-stretch py-3 px-4">
                            <label>Guests</label>
                            <div className="form-field">
                                <div className="select-wrap">
                                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                    <select name="guest_count" className="form-control" onChange={handleChange}>
                                        {[...Array(selectedRoomMaxGuests)].map((_, i) => (
                                            <option key={i} value={i + 1}>{i + 1} Adult</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md d-flex">
                    <div className="form-group d-flex align-self-stretch">
                        <button type="submit" className="btn btn-primary py-5 py-md-3 px-4 align-self-stretch d-block">
                            <span>Check Availability <small>Best Price Guaranteed!</small></span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BookingForm;