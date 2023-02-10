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
                    <Link to="/Signup" className="nav-link" onClick={closeMenu}>
                        Signin
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Conference" className="nav-link" onClick={closeMenu}>
                        Conference
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact" className="nav-link" onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
                
            </div>
        </nav>
    );
}

export default Navbar;