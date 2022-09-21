import React from 'react'
import './log.css'

const Login = () => {
    return (
        <div className='login'>
            <h2>Login</h2>
            <form method='POST'>
                <input type="text" name="username" placeholder="@user_name or Email" /> <br></br>
                <input type="password" name='password' placeholder='Password' /> <br></br>
                <button type='submit' >LOG IN</button>
                <br></br>
                <hr />
                <p>Don't have an account? <a href='/'>Create Account</a></p>

            </form>
        </div>
    )
}

export default Login
