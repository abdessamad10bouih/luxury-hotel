import React, { useState } from 'react';
import welcomImg from '../assets/welcome.png';

const Welcome = () => {
    const [visible, setVisible] = useState(true); 

    const showMainPage = () => {
        setVisible(!visible);
    };

    return (
        <div className={`${visible ? 'flex' : 'hidden'} w-full h-screen fixed justify-center items-center bg-gray-900 z-40`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className='w-1/3 gap-6 rounded-lg bg-clr absolute h-5/6 flex flex-col items-center justify-center'>
                <img src={welcomImg} className='w-72' alt="welcome img" />
                <h1 className='font-semibold text-2xl'>Welcome to My Dream Place</h1>
                <p className='text-center pl-5 pr-5 text-gray-400'>You can now enjoy your travel experience with easy access to resources and more</p>
                <button onClick={showMainPage} className='w-10/12 h-14 rounded-md text-clr bg-primary'>Get Started</button>
            </div>
        </div>
    );
};

export default Welcome;
