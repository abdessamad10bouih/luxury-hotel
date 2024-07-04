import React from 'react'
import logo from '../assets/logo.png'
import { fadeIn } from '../variants'
import { motion } from "framer-motion";

const navbar = () => {
  return (
        <motion.nav 
        variants={fadeIn("up", 0.2)}
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        className='w-[80%] h-[8vh] absolute left-[150px] top-0 flex justify-center'>
            <div className='w-[210px] h-[18vh] bg-primary rounded-b-[50px] flex justify-center items-center'><img src={logo} alt="logo" /></div>
            <ul className='w-[800px] relative top-[30px] left-[90px] flex items-center justify-evenly'>
                <li><a href="" className='border-b-2 border-white-colortext-white-color text-white-color font-medium'>Home</a></li>
                <li><a href="" className='text-white-color font-medium'>Facilities</a></li>
                <li><a href="" className='text-white-color font-medium'>Rooms</a></li>
                <li><a href="" className='text-white-color font-medium'>Contact-us</a></li>
            </ul>
        </motion.nav>
  )
}

export default navbar
