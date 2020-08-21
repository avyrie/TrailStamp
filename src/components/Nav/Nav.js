import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="nav-links">
                {/* <NavLink className='nav-link' exact to='/'>Home</NavLink>
                <NavLink className='nav-link' exact to='/'>Profile</NavLink>
                <NavLink className='nav-link' exact to='/'>Add New Hike</NavLink> */}
                <NavLink className='nav-link' exact to='/signup'>Sign Up</NavLink>
                <NavLink className='nav-link' exact to='/login'>Login</NavLink>
                {/* <NavLink className='nav-link' exact to='/'>Logout</NavLink> */}
            </div>
        </nav>
    )
}

export default Nav;