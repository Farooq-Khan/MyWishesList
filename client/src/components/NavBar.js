import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">My Todos List</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar;

