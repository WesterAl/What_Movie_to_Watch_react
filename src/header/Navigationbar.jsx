import React from 'react'

import { Link } from 'react-router-dom'

function Navigationbar() {
    return (
        <>
        <ul className='navMenu'>
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
            <div class='dot'></div>
        </ul>

        <nav class="navMenu">
            <a href="/">Home</a>
            <a href="/createlist">Lists</a>
            <a href="/profilepage">Profile</a>
            <a href="/login">Login/Logout</a>
            <a href="/registration">Registrate</a>
            <div class="dot"></div>
        </nav>
        </>
    )
}

export default Navigationbar
