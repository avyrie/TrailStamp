import React from 'react';
import { NavLink } from 'react-router-dom';
import LeafStamp from "../images/leafstampc.png";
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <NavLink  className="site-icon" to="/">
                <img className="stamp" src={LeafStamp} alt="leaf print" />
            </NavLink>
            <div className="nav-links">
                {/* <NavLink className='nav-link' exact to='/'>Home</NavLink>
                <NavLink className='nav-link' exact to='/'>Profile</NavLink>
                <NavLink className='nav-link' exact to='/'>Add New Hike</NavLink> */}
                <NavLink className='nav-link' exact to='/signup'>Sign Up</NavLink>
                <NavLink className='nav-link' exact to='/login'>Login</NavLink>
                {/* <NavLink className='nav-link' exact to='/'>Logout</NavLink> */}
                <NavLink className='nav-link' exact to='/hikes'>Hikes</NavLink>
                <NavLink className='nav-link' exact to='/hikes/new'>Add Hike</NavLink>
            </div>
        </nav>
    )
}

export default Nav;