import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className='w-full h-20 flex justify-center items-center'>
      <div className='w-11/12 h-full flex justify-center items-center'>
        <div className="w-1/4 h-full flex justify-center items-center">
          <img src={logo} alt="Logo" />
        </div>
        <ul className='w-1/2 h-full flex justify-evenly items-center'>
          <li><Link to="/" className='hover:text-primary transition-colors duration-150 ease-in-out'>Home</Link></li>
          <li><Link to="/discover" className='hover:text-primary transition-colors duration-150 ease-in-out'>Discover</Link></li>
          <li><Link to="/rooms" className='hover:text-primary transition-colors duration-150 ease-in-out'>Rooms</Link></li>
          <li><Link to="/about" className='hover:text-primary transition-colors duration-150 ease-in-out'>About</Link></li>
          <li><Link to="/contact" className='hover:text-primary transition-colors duration-150 ease-in-out'>Contact</Link></li>
        </ul>
        <div className="w-1/3 h-full flex justify-center items-center">
          <Link to="/register" className='w-28 h-3/4 rounded-md text-primary grid place-content-center border-2 border-blue-500 hover:bg-primary hover:text-txt-hover transition-colors duration-200 ease-in-out'>Register</Link>
          <Link to="/login" className='w-28 h-3/4 rounded-md text-clr bg-primary grid place-content-center border-2 border-blue-500 ml-5 hover:bg-hover transition-colors duration-300 ease-in-out border-none'>Sign In</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
