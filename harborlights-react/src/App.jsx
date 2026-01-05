import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import RoomSingle from './pages/RoomSingle'; // <--- Import here

function App() {
  const location = useLocation();

  useEffect(() => {
    // This function handles the legacy script loading
    const loadMainScript = () => {
      const scriptUrl = "/js/main.js";

      // 1. Remove existing script to prevent duplicate event listeners
      const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
      if (existingScript) {
        existingScript.remove();
      }

      // 2. Create a new script tag
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;

      // 3. Append it to the body (this runs the code inside main.js)
      document.body.appendChild(script);
    };

    // We use a small timeout to ensure the DOM is fully rendered by React
    // before the jQuery script tries to find elements.
    const timer = setTimeout(() => {
      loadMainScript();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]); // This array ensures it runs every time the URL changes

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        {/* Dynamic Route for Room Single */}
        <Route path="/rooms/:slug" element={<RoomSingle />} />
        {/* Add other routes */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;