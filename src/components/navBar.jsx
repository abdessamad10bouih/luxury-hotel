import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({className, logo}) => {
  const { user } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogOut = () => {
    signOut(auth);
    setMenuVisible(false); // Close the menu on logout
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
    <nav className={`w-full h-20 flex justify-center items-center ${className}`}>
      <div className='w-10/12 h-full flex justify-center items-center'>
        <div className="w-1/4 h-full flex justify-center items-center">
          <img src={logo} alt="Logo" />
        </div>
        <ul className='w-4/5 h-full flex justify-evenly items-center'>
          <li><Link to="/" className='hover:text-primary transition-colors duration-150 ease-in-out'>Home</Link></li>
          <li><Link to="/discover" className='hover:text-primary transition-colors duration-150 ease-in-out'>Discover</Link></li>
          <li><Link to="/rooms" className='hover:text-primary transition-colors duration-150 ease-in-out'>Rooms</Link></li>
          <li><Link to="/about" className='hover:text-primary transition-colors duration-150 ease-in-out'>About</Link></li>
          <li><Link to="/contact" className='hover:text-primary transition-colors duration-150 ease-in-out'>Contact</Link></li>
        </ul>
        <div className="w-1/3 h-full flex justify-center items-center">
          {user ? (
            <div className='relative'>
              <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer' onClick={toggleMenu}>
                <img src={user.photoURL} alt="User Profile" className='w-full h-full object-cover' />
              </div>
              {menuVisible && (
                <div className='w-52 right-10 top-10 bg-gray-200 shadow-lg absolute z-30 rounded-md'>
                  <motion.ul 
                  className='flex flex-col gap-3 w-full h-full p-5'
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  >
                    <li className='mb-4 border-b text-black'><a href="">Profile</a></li>
                    <li className='mb-4 border-b text-black'><a href="">Settings</a></li>
                    <li className='mb-4 border-b text-black'><a href="">My Bookings</a></li>
                    <li className='mb-4 border-b text-black'><a href="">Payment</a></li>
                    <li className='mb-4 border-b text-black'><a className='cursor-pointer' onClick={handleLogOut}>Logout</a></li>
                  </motion.ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/register" className='w-28 h-3/4 rounded-md text-primary grid place-content-center border-2 border-blue-500 hover:bg-primary hover:text-txt-hover transition-colors duration-200 ease-in-out'>Register</Link>
              <Link to="/login" className='w-28 h-3/4 rounded-md text-clr bg-primary grid place-content-center border-2 border-blue-500 ml-5 hover:bg-hover transition-colors duration-300 ease-in-out border-none'>Sign In</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
