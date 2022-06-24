import { Menu } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Pagetitle() {
    return (
        <>
        <div className='pageTitle'>
            <Link to="/" className='pageTitleLink'>
                <h1>What Movie to Watch</h1>
            </Link>
        </div>
        </>
        
    )
}

export default Pagetitle


