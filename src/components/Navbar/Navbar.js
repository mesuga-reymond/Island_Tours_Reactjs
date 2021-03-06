import React from 'react'
// import logo from "../../logo.svg"
import "./navbar.scss"

function Navbar() {
    return (
        <nav className="navbar">
            {/* <img src={logo} alt="city tours company"></img> */}
            <div className="navBrand">Leyte<span>Tours</span></div>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">about</a>
                </li>
                <li>
                    <a href="/" className="nav-link active">tours</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
