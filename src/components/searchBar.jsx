import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';


export default function SearchBar( {className}) {
  return (
      <div className={`absolute z-20 bottom-16 rounded-xl gap-4 bg-clr w-10/12 h-20 shadow-lg flex items-center pl-4 pr-4 pt-2 pb-2 ${className}`}>
          <div className='relative w-64 h-3/4 bg-gray-200 rounded-md flex items-center z-0 pl-4 pr-2'>
              <FontAwesomeIcon className='text-2xl text-gray-500' icon={faLocationDot} />
              <input id='city' type="text" placeholder='Where Are You Going?' className='w-11/12 p-2 h-full ml-2 text-sm bg-gray-200 placeholder:text-sm text-gray-800 focus:outline-none' />
              <ul id="suggestions" className='absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md z-10'></ul>
          </div>
          <div className='w-48 h-3/4 bg-gray-200 rounded-md flex items-center pl-4 pr-2'>
              <FontAwesomeIcon className='text-2xl text-gray-500' icon={faCalendarDays} />
              <input type="date" placeholder='Check In date' className='w-11/12 p-2 h-full ml-2 text-sm bg-gray-200 placeholder:text-sm text-gray-800 focus:outline-none' />
          </div>
          <div className='w-48 h-3/4 bg-gray-200 rounded-md flex items-center pl-4 pr-2'>
              <FontAwesomeIcon className='text-2xl text-gray-500' icon={faCalendarDays} />
              <input type="date" placeholder='Check out date' className='w-11/12 p-2 h-full ml-2 text-sm bg-gray-200 placeholder:text-sm text-gray-800 focus:outline-none' />
          </div>
          <div className='w-72 h-3/4 bg-gray-200 rounded-md flex items-center pl-4 pr-2'>
              <FontAwesomeIcon className='text-2xl text-gray-500' icon={faUser} />
              <input type="text" placeholder='Guests' className='w-11/12 p-2 h-full ml-2 text-sm bg-gray-200 placeholder:text-sm text-gray-800 focus:outline-none' />
          </div>
          <div className='w-72 h-3/4 rounded-md flex items-center justify-center pl-4 pr-2'>
              <Link to="/rooms" className='text-clr bg-primary w-full h-full grid place-content-center rounded-md text-xl'>Search</Link>
          </div>
      </div>
  )
}
