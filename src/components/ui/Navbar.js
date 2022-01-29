import React from 'react';
import { NavLink } from 'react-router-dom'
import "./navbar.css"

export const Navbar = () => {
    return (
        <nav className='main-nav'>
            <div className='nav-links'>

                <NavLink
                    activeClassName="active"
                    className="nav-link"
                    exact
                    to="/first"
                >
                   First
                </NavLink>

                <NavLink
                    activeClassName="active"
                    className="nav-link"
                    exact
                    to="/second"
                >
                    Second
                </NavLink>

                <NavLink
                    activeClassName="active"
                    className="nav-link"
                    exact
                    to="/third"
                >
                    Third 
                </NavLink>

               
            </div>

        </nav>
    )
};
