import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'

function Navigationbar() {
    return (
        <>
        
            <ul className='navMenu'>
                <MenuItem component={Link} to={'/'}>Home</MenuItem>
                <MenuItem component={Link} to={'/createlist'}>Lists</MenuItem>
                <MenuItem component={Link} to={'/profilepage'}>Profile</MenuItem>
                <MenuItem component={Link} to={'/login'}>Login/Logout</MenuItem>
                <MenuItem component={Link} to={'/registration'}>Registrate</MenuItem>
            </ul>

        </>
        
    )
}

export default Navigationbar
