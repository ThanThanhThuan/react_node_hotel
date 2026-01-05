CREATE DATABASE harborlights;
\ c harborlights;
CREATE TABLE room_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    max_adults INT NOT NULL,
    size VARCHAR(50),
    view_type VARCHAR(100),
    bed_count INT,
    total_quantity INT NOT NULL,
    price DECIMAL(10, 2),
    image_url VARCHAR(255)
);
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    room_category_id INT REFERENCES room_categories(id),
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    guest_count INT,
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Seed Data (Based on your rooms.html)
INSERT INTO room_categories (
        name,
        slug,
        max_adults,
        size,
        view_type,
        bed_count,
        total_quantity,
        price,
        image_url
    )
VALUES (
        'King Room',
        'king-room',
        2,
        '40 m2',
        'Sea View',
        1,
        5,
        120.00,
        '/images/room-6.jpg'
    ),
    (
        'Suite Room',
        'suite-room',
        3,
        '55 m2',
        'Ocean View',
        2,
        3,
        150.00,
        '/images/room-1.jpg'
    ),
    (
        'Family Room',
        'family-room',
        4,
        '60 m2',
        'Garden View',
        3,
        4,
        180.00,
        '/images/room-2.jpg'
    ),
    (
        'Deluxe Room',
        'deluxe-room',
        2,
        '45 m2',
        'Sea View',
        1,
        6,
        130.00,
        '/images/room-3.jpg'
    ),
    (
        'Luxury Room',
        'luxury-room',
        3,
        '50 m2',
        'Pool View',
        1,
        4,
        200.00,
        '/images/room-4.jpg'
    ),
    (
        'Superior Room',
        'superior-room',
        2,
        '35 m2',
        'City View',
        1,
        8,
        100.00,
        '/images/room-5.jpg'
    );