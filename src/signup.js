import React from 'react'
import './signup.css'

const Signup = () => {
    return (
        <div className='signup'>
        <h2>SIGN UP</h2>
            <form method='POST'>
                <input type='text' name='username' placeholder='Fullname' />
                <input type='email' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Password' />
                <input type='password' name='re-password' placeholder='re-password' />
                <input type='date' name='birthday' placeholder='date of birht' />
            </form>
            <button type='submit'> <a> SIGN UP</a></button>
            <hr/>
            Already have Account? <a>Log in here</a>
        </div>
    )
}

export default Signup
