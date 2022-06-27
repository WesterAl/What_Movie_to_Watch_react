import { Menu } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';

function Pagetitle() {
    return (
        <>
        <div className='app'>
            <div className='pageTitle'>
                <MenuItem component={Link} to={'/'}> <h1>What movie to watch</h1></MenuItem>
            </div>
        </div>

        </>
        
    )
}

export default Pagetitle


