import React from 'react';
import { Link } from 'react-router-dom'

// STYLES 
import './NavBar.css';

const NavBar = () => {
    return (
        <>
          <div className="nav-container">
            <div className="wrapper">
                <nav>
                    <div className="logo">
                         CodeBook.
                    </div>

                    <ul className="nav-items">
                        <li>
                            <Link to="/" className="links">LandingPage</Link>
                        </li>
                        <li>
                            <Link to="/message" className="links">message</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="links">contact</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="links">about us</Link>
                        </li>
                    </ul>
                </nav>
              </div>
          </div>
        </>
    )
}

export default NavBar;