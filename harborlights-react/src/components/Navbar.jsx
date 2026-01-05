import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">THAN Harbor<span>lights</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${isActive('/')}`}><Link to="/" className="nav-link">Home</Link></li>
                        <li className={`nav-item ${isActive('/rooms')}`}><Link to="/rooms" className="nav-link">Our Rooms</Link></li>
                        <li className={`nav-item ${isActive('/restaurant')}`}><Link to="/restaurant" className="nav-link">Restaurant</Link></li>
                        <li className={`nav-item ${isActive('/about')}`}><Link to="/about" className="nav-link">About Us</Link></li>
                        <li className={`nav-item ${isActive('/blog')}`}><Link to="/blog" className="nav-link">Blog</Link></li>
                        <li className={`nav-item ${isActive('/contact')}`}><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;