import React from 'react';
import { NavLink } from 'react-router-dom';
import LeafStamp from "../images/leafstampc.png";
import './Nav.css';

const Nav = ({ currentUser, logout }) => {
    console.log(`THIS IS CURRENT USER FROM NAV: `, currentUser)
    return (
        <nav>
            <NavLink className="site-icon" exact to="/">
                <img className="stamp" src={LeafStamp} alt="leaf print" />
            </NavLink>
            <div className="nav-links">
                {currentUser && (
                    <React.Fragment>
                        <NavLink className='nav-link' exact to='/hikes'>Profile</NavLink>
                        <NavLink className='nav-link' exact to='/hikes/new'>Add Hike</NavLink> 
                        <NavLink onClick={logout} className='nav-link' exact to='/'>Logout</NavLink> 
                    </React.Fragment>
                )}
                {!currentUser && (
                    <React.Fragment>
                        <NavLink className='nav-link' exact to='/signup'>Sign Up</NavLink>

                        <NavLink className='nav-link' exact to='/login'>Login</NavLink>
                    </React.Fragment>
                )}
            </div>
        </nav>
    )
}

export default Nav;