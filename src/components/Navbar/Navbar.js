import React, { useState } from "react";
import {Link} from "react-router-dom";
import {FiX, FiMenu} from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    const closeMenu = () => {
        setOpen(false);
    };
    return (
        <nav className="navbar">
            <h3 className="logo">TOODLES</h3>
            <div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
            <div className={open ? 'nav-links active': 'nav-links'}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/planner" className="nav-link" onClick={closeMenu}>
                        Planner
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/scoreboard" className="nav-link" onClick={closeMenu}>
                        Scoreboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link" onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link" onClick={closeMenu}>
                        Signup
                    </Link>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;