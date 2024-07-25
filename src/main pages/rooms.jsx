import React from 'react';
import Navbar from '../components/navBar';
import logo from '../assets/logoWhite.png';
import SearchBar from '../components/searchBar';
import room from '../assets/room.png';
import stars from '../assets/stars.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Rating } from "primereact/rating";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import '../App.css'
import { Link } from 'react-router-dom';


export const Rooms = () => {
  return (
    <>
      <header className='w-full h-80 flex justify-center bg-gradient-to-b from-blue-400 to-blue-600 p-0 m-0'>
        <Navbar className={"text-clr"} logo={logo} />
        <SearchBar className={"absolute top-[280px] left-[120px]"} />
      </header>
      <section className='w-full h-full p-10 gap-4 flex mt-14'>
        <div className='w-2/6 h-full flex flex-col'>
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
          <div className='w-full rounded-m border bg-clr flex flex-col'>
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
            <div className='h-14 w-full border-b-2 rounded-br-md rounded-bl-md flex items-center'>
              <h1 className='ml-5'>set your own budget</h1>

            </div>
          </div>
          <div className='w-full rounded-md border mt-10 bg-clr flex flex-col'>
            <div className='w-full h-14 rounded-tr-md rounded-tl-md flex items-center bg-gray-100'>
              <h1 className='text-lg ml-7 font-semibold'>Popular Filters</h1>
            </div>
            <div className='w-full h-56 flex flex-col p-5'>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>Fee cancellation</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>spa</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>beach front</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>Hot tub/jacuzzi</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>book without credit card</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>No prepayment</h1>
              </div>
            </div>
          </div>
          <div className='w-full rounded-md mt-10 bg-clr flex flex-col'>
            <div className='w-full h-14 rounded-tr-md rounded-tl-md flex items-center bg-gray-100'>
              <h1 className='text-lg ml-7 font-semibold'>Activities</h1>
            </div>
            <div className='w-full h-56 border flex flex-col p-5'>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>Fishing</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>Hiking</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>Beach</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>Cycling</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>Sauna</h1>
              </div>
              <div className='w-full h-10 flex items-center'>
                <input type="checkbox" name="check" id="check" className='w-6 h-6 mr-4' />
                <h1>Night Lights</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='w-11/12 h-full flex flex-col justify-center'>
          <h1 className='text-2xl text-black font-semibold'>Ouarzazate : 122 search reasults found</h1>
          <div className='w-full h-16 flex items-center mt-3 justify-between'>
            <div className='flex w-[750px] h-5/6 border ml-2 rounded-md border-primary'>
              <a className=' cursor-pointer w-60 h-full border-r border-primary grid place-content-center hover:bg-primary-hover'>Our top Picks</a>
              <a className=' cursor-pointer w-96 p-2 h-full border-r border-primary grid place-content-center hover:bg-primary-hover'>Hotels and apartements</a>
              <a className=' cursor-pointer w-60 h-full border-r border-primary grid place-content-center hover:bg-primary-hover'>Residence</a>
              <a className=' cursor-pointer w-60 h-full border-r border-primary grid place-content-center hover:bg-primary-hover'>Resort</a>
              <a className=' cursor-pointer w-60 h-full border-primary grid place-content-center hover:bg-primary-hover'>Shared Space</a>
            </div>
            <div className='border-2 border-gray-400 p-1 flex flex-col w-44 h-5/6 rounded-md'>
              <h2 className='text-gray-400 text-sm '>Sort By</h2>
              <select className='w-full h-full  focus:outline-none' name="sort" id="sort">
                <option value="recomended">Recommended</option>
              </select>
            </div>
          </div>
          <div className='w-full h-80 flex'>
            <div className='flex justify-center items-center w-10/12 h-full'>
              <img src={room} alt="room" className='w-10/12 h-5/6' />
            </div>
            <div className='w-full h-full flex flex-col'>
              <h1 className='text-xl font-bold mt-10'>Lakeside motel Warefront</h1>
              <div className='w-full mt-2 flex'>
                <Rating value={4} readOnly cancel={false} className="custom-rating" />
                <h2 className='ml-3'>4.5 (1200 views)</h2>
              </div>
              <h1 className='text-md mt-8 text-gray-500 font-semibold'>Live a little and celbrate with champagne </h1>
              <p>Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>
              <div className='w-full h-52 flex items-center justify-around'>
                <div className='w-full h-full'>
                  <Link to="/room" className='bg-primary cursor-pointer text-clr w-40 h-12 grid place-content-center mt-7 rounded-md '>See availability</Link>
                </div>
                <div className='w-full h-1/2 flex flex-col justify-end items-end '>
                  <h2 className='text-2xl text-gray-600' >300£</h2>
                  <h2>Include Taxes and fees</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Rooms
