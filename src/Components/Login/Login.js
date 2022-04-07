import React from 'react';
import './Login.css';

const Login = () => {
    return (

        <div className="main-details">
            <h2 className='header'>Login</h2>
            <div className='info'>
                <label >Email</label><br />
                <input type="email" placeholder='Pleace inter your Email' />
            </div>
            <div className='info'>
                <label >Password</label> <br />
                <input type="password" placeholder='Pleace inter your Password' />
            </div>

            <button className='Explore'>Login</button>
            <button className='registrations'>Registrations</button>
        </div>

    );
};

export default Login;