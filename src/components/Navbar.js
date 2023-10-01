

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul className="nav-links">
                    <li>
                        <Link to="/signup" className="nav-link">
                            Anil Sharma
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="nav-link">
                            Signup
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/jobs" className="nav-link">
                            JobList
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/jobs/1" className="nav-link">
                            JobDetail
                        </Link>
                    </li>
                    <li>
                        <Link to="/apply/1" className="nav-link">
                            ApplyJob
                        </Link>
                    </li>
                    <li>
                        <Link to="/success" className="nav-link">
                            SuccessPage
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="project-name">Your Project Name</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
            </div>
        </nav>
    );
}

