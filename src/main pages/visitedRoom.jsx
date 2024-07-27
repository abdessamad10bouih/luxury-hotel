import React from 'react';
import Navbar from '../components/navBar';
import logo from '../assets/logo.png';
import img1 from '../assets/imgRoom.png'
import img2 from '../assets/imgRoom2.png'
import img3 from '../assets/imgRoom3.png'

export default function Visited () {
  return (
    <>
    <header className='w-full flex flex-col h-screen'>
        <Navbar logo={logo} />
        <section className='w-full h-4/5 gap-4 p-3 flex'>
                <div className='w-full border h-full'>
                    <img className='w-full h-full object-fill' src={img1} alt="room" />
                </div>
                <div className='w-1/3 gap-5 h-full flex flex-col'>
                    <img className='h-56' src={img2} alt="" />
                    <img className='h-56' src={img3} alt="" />
                </div>
        </section>
    </header>
      <section className='w-full h-screen flex flex-col border'>
        <div className='w-full h-12 border border-red-700 flex'>
          <li><a href="">Overview</a></li>
          <li><a href="">Rooms</a></li>
          <li><a href="">Guest Reviews</a></li>
        </div>
      </section>
    </>
  )
}
