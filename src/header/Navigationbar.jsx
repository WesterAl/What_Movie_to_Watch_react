import React from 'react'

import { Link } from 'react-router-dom'

function Navigationbar() {
    return (
        <>
        <nav className="navMenu">
        <Link to="/">Home</Link>
        <Link to="/createlist">Lists</Link>
        <Link to="/profilepage">Profile</Link>
        <Link to="/login">Login/Logout</Link>
        <Link to="/registration">Registrate</Link>
            <div className="dot">
            </div>
        </nav>
        </>
    )
}

export default Navigationbar
