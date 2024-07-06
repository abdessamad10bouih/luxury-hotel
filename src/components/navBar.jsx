import React from 'react'
import logo from '../assets/logo.png'
import { fadeIn } from '../variants'
import { motion } from "framer-motion";

const navbar = () => {
  return (
        <nav className='w-full h-20 flex justify-center items-center'>
          <div className='w-11/12 h-full flex justify-center items-center'>
            <div className="w-1/4 h-full flex justify-center items-center"><img src={logo} alt="" /></div>
            <ul className='w-1/2 h-full flex justify-evenly items-center'>
              <li><a href="" className='hover:text-primary transition-colors duration-150 ease-in-out'>Home</a></li>
              <li><a href="" className='hover:text-primary transition-colors duration-150 ease-in-out'>Discover</a></li>
              <li><a href="" className='hover:text-primary transition-colors duration-150 ease-in-out'>Rooms</a></li>
              <li><a href="" className='hover:text-primary transition-colors duration-150 ease-in-out'>About</a></li>
              <li><a href="" className='hover:text-primary transition-colors duration-150 ease-in-out'>Contact</a></li>
            </ul>
            <div className="w-1/3 h-full flex justify-center items-center">
           <a className='w-28 h-3/4 rounded-md text-primary grid place-content-center border-2 border-blue-500 hover:bg-primary hover:text-txt-hover transition-colors duration-200 ease-in-out' href="">Register</a>
            <a className='w-28 h-3/4 rounded-md text-clr bg-primary grid place-content-center border-2 border-blue-500 ml-5 hover:bg-hover transition-colors duration-300 ease-in-out border-none' href="">Sign In</a>
          </div>
          </div>
        </nav>
  )
}

export default navbar
