import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPlaneDeparture, faWallet, faArrowRightFromBracket, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ className, logo }) => {
  const { user } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogOut = () => {
    signOut(auth);
    setMenuVisible(false);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const variants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <nav className={`flex w-full h-20 justify-between items-center p-4 md:p-0 md:h-20 md:justify-center md:items-center ${className}`}>
      <div className='flex justify-between w-full h-full items-center md:w-11/12 md:flex md:justify-center md:items-center'>
        <div className="flex items-center justify-between w-full md:w-1/4">
          <img src={logo} alt="Logo" />
          <button className="text-2xl md:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuVisible ? faTimes : faBars} />
          </button>
        </div>

        <ul className={`fixed top-20 right-0 w-3/4 h-full bg-white shadow-lg z-50 transform ${menuVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:static md:flex md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none`}>
          <li><Link to="/luxury-hotel" className='block p-4 mt-2 hover:text-primary transition-colors duration-150 ease-in-out'>Home</Link></li>
          <li><Link to="/discover" className='block p-4 mt-2 hover:text-primary transition-colors duration-150 ease-in-out'>Discover</Link></li>
          <li><Link to="/rooms" className='block p-4 mt-2 hover:text-primary transition-colors duration-150 ease-in-out'>Rooms</Link></li>
          <li><Link to="/about" className='block p-4 mt-2 hover:text-primary transition-colors duration-150 ease-in-out'>About</Link></li>
          <li><Link to="/contact" className='block p-4 mt-2 hover:text-primary transition-colors duration-150 ease-in-out'>Contact</Link></li>
          {!user ? (
            <div className='flex flex-col mt-4 px-4 md:hidden'>
              <Link to="/register" className='block w-full py-2 text-center rounded-md text-primary border-2 border-blue-500 hover:bg-primary hover:text-txt-hover transition-colors duration-200 ease-in-out mb-2'>Register</Link>
              <Link to="/login" className='block w-full py-2 text-center rounded-md text-clr bg-primary border-2 border-blue-500 hover:bg-hover transition-colors duration-300 ease-in-out'>Sign In</Link>
            </div>
          ) : (
            <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer md:hidden' onClick={toggleMenu}>
              <img src={user.photoURL} alt="User Profile" className='w-full h-full object-cover' />
            </div>
          )}

        </ul>

        <div className="hidden md:flex md:w-1/3 h-full justify-center items-center">
          {user ? (
            <div className='relative'>
              <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer' onClick={toggleMenu}>
                <img src={user.photoURL} alt="User Profile" className='w-full h-full object-cover' />
              </div>
              {menuVisible && (
                <div className='w-64 h-64 right-1 top-14 bg-white shadow-md absolute z-30 rounded-lg'>
                  <motion.ul
                    className='flex flex-col w-full h-full justify-center items-center'
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                  >
                    <li className='text-black w-full h-full border-b flex items-center border-gray-200 gap-2'> <FontAwesomeIcon icon={faCircleUser} className='ml-3' /> <a href="" className='font-semibold'>Account Management</a></li>
                    <li className='text-black w-full h-full border-b flex items-center border-gray-200 gap-2'> <FontAwesomeIcon icon={faPlaneDeparture} className='ml-3' /> <a href="" className='font-semibold'>My Trips</a></li>
                    <li className='text-black w-full h-full border-b flex items-center border-gray-200 gap-2'> <FontAwesomeIcon icon={faWallet} className='ml-3' /> <a href="" className='font-semibold'>Rewards and wallet</a></li>
                    <li className='text-black w-full h-full border-b flex items-center rounded-b-lg border-gray-200 gap-2'> <a href="" className='font-semibold' onClick={handleLogOut}> <FontAwesomeIcon icon={faArrowRightFromBracket} className='ml-3' /> Logout</a></li>
                  </motion.ul>
                </div>
              )}
            </div>
          ) : (
            <div className='flex w-4/5 h-full justify-end items-center'>
              <Link to="/register" className='w-28 h-4/5 rounded-md text-primary grid place-content-center border-2 border-blue-500 hover:bg-primary hover:text-txt-hover transition-colors duration-200 ease-in-out mr-4'>Register</Link>
              <Link to="/login" className='w-28 h-4/5 rounded-md text-clr bg-primary grid place-content-center border-2 border-blue-500 hover:bg-hover transition-colors duration-300 ease-in-out'>Sign In</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
