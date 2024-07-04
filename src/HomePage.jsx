import React from 'react';
import NavBar from './components/navBar';
import heroImage from './assets/hero-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { fadeIn, scaleBtn } from './variants';

export default function Hero() {
  return (
    <>
        <header className='w-full h-screen flex items-center font-sans bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})`}}>
            <NavBar />
            <section className='w-full h-screen flex flex-col justify-center '>
                <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='w-2/4 h-3/5 flex justify-center flex-col p-36'>
                    <h2 className='text-5xl text-white font-extralight uppercase'>welcome to</h2>
                    <h1 className='text-9xl text-white font-serif'>LUXURY</h1>
                    <h2 className='text-5xl text-white font-serif uppercase tracking-widest'>Hotels</h2>
                    <p className='text-white mt-5'>Book your stay and enjoy Luxury <br />
                    redefined at the most affordable rates.
                    </p>
                </motion.div>
                <div className='w-full h-[8vh] flex justify-center items-center'>
                    <motion.a 
                    variants={scaleBtn('0.2', 0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    href="" className='w-[15%] flex justify-center items-center text-[20px] text-white-color uppercase h-full bg-primary rounded-lg hover:bg-primary '> <FontAwesomeIcon className='text-[18px] mr-2' icon={faHome} /> Book Now</motion.a>
                </div>
                <div className='w-full h-[8vh] flex flex-col justify-center items-center relative top-[40px]'>
                    <h3 className='text-xl text-white-color'>Scroll</h3>
                    <motion.div
                    className='mt-2'
                    animate={{
                        rotate: 180,
                        transition: { duration: 0.7, ease: "easeInOut" },
                    }}>
                        <FontAwesomeIcon className='text-white-color transform rotate-[-180deg] text-5xl cursor-pointer' icon={faCircleArrowDown} />
                    </motion.div>
                </div>
            </section>
        </header>
    </>
  );
}
