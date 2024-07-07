import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear(); 
  return (
    <footer className='w-full h-[50vh] flex flex-col items-center'>
            <div className='w-11/12 h-full flex'>
                <div className='w-full h-full p-10 gap-2 flex flex-col'>
                    <img src={logo} className='w-48' alt="" />
                    <p>Your next goto companion for <br /> travel</p>
                </div>
                <div className='w-full h-full p-10 gap-2 flex flex-col'>
                    <h3 className='mb-2 font-bold text-xl'>Company</h3>
                    <a href="">About</a>
                    <a href="">Jobs</a>
                    <a href="">Newsrooms</a>
                    <a href="">Advertising</a>
                    <a href="">Contact Us</a>
                </div>
                <div className='w-full h-full p-10 gap-2 flex flex-col'>
                    <h3 className='mb-2 font-bold text-xl'>Explore</h3>
                    <a href="">Australia</a>
                    <a href="">New Zeeland</a>
                    <a href="">United States Of America (USA)</a>
                    <a href="">Morocco</a>
                    <a href="">Greece</a>
                    <a className='text-primary' href="">See More</a>
                </div>
                <div className='w-full h-full p-10 gap-2 flex flex-col'>
                    <h3 className='mb-2 font-bold text-xl'>Terms and Policy</h3>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Use</a>
                    <a href="">Acessibility</a>
                    <a href="">Reward system policy</a>
                </div>
                <div className='w-full h-full p-10 gap-2 flex flex-col'>
                    <h3 className='mb-2 font-bold text-xl'>Help</h3>
                    <a href="">Support</a>
                    <a href="">Cancel Your Bookings</a>
                    <a href="">Usz Coupon</a>
                    <a href="">Refund Policies</a>
                    <a href="">International Travel Documents (ITD)</a>
                </div>
            </div>
            <div className='w-full h-[7vh] flex justify-end bg-gray-200'>
                <h1 className='text-gray-500 mt-2 mr-32'>@myDreamPlace{currentYear}</h1>
            </div>
    </footer>
  )
}

export default Footer
