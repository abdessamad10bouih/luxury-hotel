import React from 'react';
import Navbar from '../components/navBar';
import logo from '../assets/logoWhite.png';
import SearchBar from '../components/searchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Rooms = () => {
  return (
    <>
      <header className='w-full h-80 flex justify-center bg-gradient-to-b from-blue-400 to-blue-600 p-0 m-0'>
        <Navbar className={"text-clr"} logo={logo} />
        <SearchBar className={"absolute top-[280px] left-[120px]"} />
      </header>
      <section className='w-full h-[120vh] p-10 gap-4 flex mt-14'>
        <div className='w-2/6 h-full flex border-2 flex-col'>
          <div className='w-full h-36 rounded-md p-6 bg-gray-100'>
            <h1 className='text-xl font-bold'>Search By Propriety Name</h1>
            <div className='flex mt-2 h-14 rounded-md bg-clr'>
              <div className=' flex justify-center items-center w-20 h-full'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl' />
              </div>
              <input type="text" name="prop" id="prop" placeholder='eg. Salé Beach' className='w-full h-full pl-4 bg-clr focus:outline-none' />
            </div>
          </div>
          <h1 className='text-xl mt-5 mb-5 font-bold'>Filter By</h1>
          <div className='w-full rounded-md bg-clr flex flex-col'>
            <div className='w-full h-14 rounded-tr-md rounded-tl-md flex items-center bg-gray-100'>
              <h1 className='text-lg ml-7 font-semibold'>Your budget per day</h1>
            </div>
            <div className='w-full h-56 flex flex-col p-5'>
                  <div className='w-full h-10 flex items-center'>
                    <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                    <h1>$0 - $200</h1>
                  </div>
                  <div className='w-full h-10 flex items-center'>
                    <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                    <h1>$200 - $500</h1>
                  </div>
                  <div className='w-full h-10 flex items-center'>
                    <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                    <h1>$500 - $1000</h1>
                  </div>
                  <div className='w-full h-10 flex items-center'>
                    <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                    <h1>$1000 - $2000</h1>
                  </div>
                  <div className='w-full h-10 flex items-center'>
                    <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                    <h1>$2000 - $5000</h1>
                  </div>
            </div>
            <div className='h-14 w-full border-2 flex items-center'>
              <h1 className='ml-5'>set your own budget</h1>
              
            </div>
          </div>
        </div>
        <div className='w-11/12 h-full border '>

        </div>

      </section>
    </>
  )
}

export default Rooms
