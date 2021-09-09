import React, { useState } from 'react';
import axios from 'axios';



function Login() {
    const [] = useState([])

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
                <button>
                    Log In
                </button>
                <button>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Login