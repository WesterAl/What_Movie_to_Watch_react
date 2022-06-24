import React from 'react'
import { Link } from 'react-router-dom'

function Navigationbar() {
    return (
        <>
        <ul className='navBarLeft'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/createlist">Lists</Link>
            </li>
            <li>
            <Link to="/profilepage">Profile</Link>
            </li>
            <li>
            <Link to="/login">Login/Logout</Link>
            </li>
            <li>
            <Link to="/registration">Registrate</Link>
            </li>
        </ul>
        </>
    )
}

export default Navigationbar

