import React from 'react';
import Navbar from '../components/navBar';
import logo from '../assets/logo.png';
import img1 from '../assets/imgRoom.png'
import img2 from '../assets/imgRoom2.png'
import img3 from '../assets/imgRoom3.png';
import Rating from '@mui/material/Rating';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faLocationDot, faPersonSwimming, faShoppingBag, faThumbsUp, faWifi, faWind } from '@fortawesome/free-solid-svg-icons';

export default function Visited() {
  const handleSubmitting = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <header className='w-full flex flex-col h-screen'>
        <Navbar logo={logo} />
        <section className='w-full h-4/5 gap-4 p-3 flex'>
          <div className='w-full border h-full'>
            <img className='w-full h-full object-fill' src={img1} alt="room" />
          </div>
          <div className='w-1/3 gap-5 h-full flex flex-col'>
            <img className='h-56' src={img2} />
            <img className='h-56' src={img3} />
          </div>
        </section>
      </header>
      <section className='w-full h-screen flex flex-col border'>
        <div className='w-full items-center pl-5 pr-5 h-12 flex'>
          <ul className='w-full h-full flex items-center'>
            <li className='list-none ml-16 h-full w-36 flex items-center justify-center'><a onClick={handleSubmitting} className='border-b-4 rounded-sm h-full border-primary w-full flex justify-center items-center' href="">Overview</a></li>
            <li className='list-none h-full w-36 flex items-center justify-center'><a onClick={handleSubmitting} className='w-full flex h-full justify-center items-center' href="">Rooms</a></li>
            <li className='list-none h-full w-36 flex items-center justify-center'><a onClick={handleSubmitting} className='w-full flex h-full justify-center items-center' href="">Guest Reviews</a></li>
          </ul>
        </div>
        <div className='w-full h-full border-2 flex bg-gray-200'>
          <div className='w-3/5 h-full border flex flex-col pl-20 pr-10 pt-3 '>
            <h1 className='text-4xl font-bold'>Lakeside Motel Warefront</h1>
            <div className='w-full mt-2 flex'>
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              <h1 className='text-xl ml-5 '>4.5 (12000 Reviews)</h1>
            </div>
            <div className='w-full h-11 items-center flex'>
              <FontAwesomeIcon className='text-xl text-primary' icon={faLocationDot} />
              <h1 className='ml-5'>Lorem ipsum road, Tantruim-2322, Melbourne, Australia</h1>
            </div>
            <div className='w-full mt-2 rounded-md flex flex-col h-full bg-clr'>
              <div className='flex flex-col p-10 border-b-2'>
                <h1 className='text-xl'>Overview</h1>
                <p className='mt-5'>Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site. <br /> <br /> Each room at this motel is air conditioned and comes with a flat-screen TV. You will find a kettle, toaster and a microwave in the room. Each room is fitted with a private bathroom. Guests have access to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi from the property. <br /> <br /> Couples in particular like the location – they rated it 9.2 for a two-person trip.</p>
              </div>
              <div className='p-10 flex flex-col'>
                <h1>Top Facilities</h1>
                <div className='flex w-3/4 h-full mt-3'>
                  <div className='w-full h-full flex flex-col'>
                    <div className="w-full flex items-center">
                      <FontAwesomeIcon icon={faWifi} className='text-primary text-xl' />
                      <h1 className='ml-3'>Free Wifi</h1>
                    </div>
                    <div className="w-full flex items-center mt-2">
                      <FontAwesomeIcon icon={faWind} className='text-primary text-xl ml-1' />
                      <h1 className='ml-3'>Air Conditioning</h1>
                    </div>
                    <div className="w-full flex items-center mt-2">
                      <FontAwesomeIcon icon={faCar} className='text-primary text-xl ml-1' />
                      <h1 className='ml-3'>Parking Available</h1>
                    </div>
                  </div>
                  <div className='w-full h-full flex flex-col'>
                    <div className="w-full flex items-center">
                      <FontAwesomeIcon icon={faShoppingBag} className='text-primary text-xl' />
                      <h1 className='ml-3'>Business Services</h1>
                    </div>
                    <div className="w-full flex items-center mt-2">
                      <FontAwesomeIcon icon={faPersonSwimming} className='text-primary text-xl' />
                      <h1 className='ml-3'>Swinmming pool</h1>
                    </div>
                    <div className="w-full flex items-center mt-2">
                      <FontAwesomeIcon icon={faThumbsUp} className='text-primary text-xl' />
                      <h1 className='ml-3'>Top rated area</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[40%] h-full border border-red-500'>

          </div>
        </div>
      </section>
    </>
  )
}
