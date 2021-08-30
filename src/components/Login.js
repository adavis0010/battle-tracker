import React from 'react';

function Login() {
    return(
        <div className='auth'>
            <h4>Log In</h4>
            <input
                type= 'textbox'
                id='username'
                placeholder='Username'
            />
            <input
                type= 'password'
                id='password'
                placeholder='Password'
            />
            <div className= 'auth-buttons'>
                <button id='login-button'>
                    Log In
                </button>
                <button id='signup-button'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Login