import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="nav-links">
                {/* <Link to="">Home</Link>
                <Link to="">Profile</Link>
                <Link to="">Add New Hike</Link> */}
                <Link to="">Sign Up</Link>
                <Link to="">Login</Link>
                {/* <Link to="">Logout</Link> */}
            </div>
        </nav>
    )
}

export default Nav;