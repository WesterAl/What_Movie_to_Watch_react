import { Link } from '@mui/material'
import React from 'react'

function RegistrationForm() {
    return (
        <>
        <h1>Registrate</h1>
        <form>
            <label>
                First name:
                <br></br>
                <input type="text" name="nameFirst" />
            </label>
            <br></br>
            <label>
            Last name:
                <br></br>
                <input type="text" name="nameLast" />
            </label>
            <br></br>
            <label>
            Email:
                <br></br>
                <input type="text" name="email" />
            </label>
            <br></br>
            <label>
            Username:
                <br></br>
                <input type="text" name="username" />
            </label>
        </form>

        <div className='loginButton'>
            <Link to="/" className='abc'>
                <p>Login</p>
            </Link>
            
        </div>
        </>
    )
}

export default RegistrationForm
