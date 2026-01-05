# Harborlights Hotel
🏨 **Harborlights Hotel - Project Summary**

**1. Project Overview**

This project represents a migration of a static Bootstrap 4 + jQuery template into a dynamic Full Stack Web Application.
Many thanks to the author of the template: https://themewagon.com/themes/free-bootstrap-4-html5-responsive-hotel-website-template-harbor-lights/

    Frontend: React (Vite) with SCSS.

    Backend: Node.js with Express.

    Database: PostgreSQL.

**2. Technology Stack**
 
Component	Technology	Description

Frontend	React (Vite)	Single Page Application (SPA) architecture.

Styling	SCSS / Bootstrap 4	Inherited from template, compiled via Vite SASS.

Routing	React Router Dom	Handles navigation (/, /rooms, /rooms/:slug).

Scripts	jQuery / Owl Carousel	Legacy scripts loaded dynamically via React Hooks.

UI Alerts	SweetAlert2	Professional popups for success/error messages.

Backend	Node.js / Express	REST API handling data requests.

Database	PostgreSQL	Relational DB storing Room Categories and Bookings.

**4. Key Frontend Features**
Dynamic Routing

Instead of room-single.html, we use a dynamic route:
 
<Route path="/rooms/:slug" element={<RoomSingle />} />

  

Clicking "View Details" on the "King Room" takes the user to /rooms/king-room.
Legacy Script Management

Since the template relies on jQuery, Owl Carousel, and Bootstrap JS (which expect a static page reload), we implemented a useEffect hook in App.jsx.

    It detects route changes.

    It removes the old main.js.

    It injects a fresh main.js tag to re-initialize sliders and animations.

Smart Booking Form

    Room Dropdown: Populated dynamically from the database.

    Guest Dropdown: Updates automatically based on the max_adults of the selected room.

    Feedback: Uses SweetAlert2 to show specific error messages (e.g., "No rooms available") or success messages.

**5. How to Run**
1. Start Database

Ensure PostgreSQL is running and you have created the database .
2. Start Backend
cd harborlights-server
npm run dev

3. Start Frontend
cd harborlights-react
npm run dev
_runs on localhost:5173_

<img width="1547" height="1092" alt="image" src="https://github.com/user-attachments/assets/e616f7e7-951a-4471-8964-2d32aa7d7b1e" />


  
