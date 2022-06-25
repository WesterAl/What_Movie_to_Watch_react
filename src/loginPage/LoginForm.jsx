import { Link } from '@mui/material'
import React from 'react'

function LoginForm() {
    return (
        <>
        <h1>Login</h1>
        <form>
            <label>
                Username:
                <br></br>
                <input type="text" name="username" />
            </label>
            <br></br>
            <label>
                Password:
                <br></br>
            <input type="text" name="password" />
            </label>
            <br></br>
        </form>

        <div className='loginButton'>
            <Link to="/" className='abc'>
                <p>Login</p>
            </Link>
        </div>
        </>
        
    )
}

export default LoginForm
