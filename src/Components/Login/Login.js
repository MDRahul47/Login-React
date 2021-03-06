import React from 'react';
import './Login.css';

const Login = () => {
    const clickSubmit = event => {
        event.preventDefault();
    }

    const clickEmail = event => {
        console.log(event.target.value);
    }

    const clickPassword = event => {
        console.log(event.target.value);

    }
    return (

        <div className="main-details">
            <h2 className='header'>Login</h2>
            <form onClick={clickSubmit} >
                <div className='info'>
                    <label >Email</label><br />
                    <input onBlur={clickEmail} type="email" placeholder='Pleace inter your Email' required />
                </div>
                <div className='info'>
                    <label >Password</label> <br />
                    <input onBlur={clickPassword} type="password" placeholder='Pleace inter your Password' required />
                </div>

                <button className='Explore'>Login</button>
                <button className='registrations'>Registrations</button>
            </form>
        </div>

    );
};

export default Login;