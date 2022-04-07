import React from 'react';
import './Registation.css';

const Registation = () => {
    const clickSubmit = event => {
        event.preventDefault();
    }

    const clickName = event => {
        console.log(event.target.value);
    }

    const clickEmail = event => {
        console.log(event.target.value);
    }

    const clickPassword = event => {
        console.log(event.target.value);

    }
    return (
        <div className="main-details">
            <h2 className='header'>Registrations</h2>
            <form onClick={clickSubmit} >
                <div className='info'>
                    <label >Name</label><br />
                    <input onBlur={clickName} type="text" placeholder='Pleace inter your Name' required />
                </div>
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

export default Registation;