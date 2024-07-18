import React, { useEffect } from 'react';
import logo from '../assets/logo.png'
import heroImage from '../assets/hero-image.png';
import australia from '../assets/australia.png';
import japan from '../assets/japan.png';
import newZelanda from '../assets/newzelanda.png';
import greece from '../assets/greece.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/Rectangle 8.png';
import img7 from '../assets/Rectangle 9.png';
import img5 from '../assets/Rectangle 10.png';
import img6 from '../assets/Rectangle 11.png';
import imgMobile from '../assets/mobile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import Covid from '../components/covid';
import Button from '../components/button';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import SearchBar from '../components/searchBar';

export default function HomePage() {
  useEffect(() => {
    $('#city').on('input', function () {
      const query = $(this).val();
      $.ajax({
        async: true,
        crossDomain: true,
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`,
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'cb30ad3d29msh3f0c8e2fffb5d19p191ac7jsn34a015ddecee',
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
        },
        success: function (data) {
          const cities = data.data;
          $('#suggestions').empty();
          cities.forEach(city => {
            const li = $('<li></li>')
              .addClass('px-4 py-2 hover:bg-gray-200 cursor-pointer')
              .text(`${city.city}, ${city.country}`)
              .on('click', function () {
                $('#city').val($(this).text());
                $('#suggestions').empty();
              });
            $('#suggestions').append(li);
          });
        },
        error: function (err) {
          console.error('Error fetching city data:', err);
        }
      });
    });
  }, []);

  return (
    <>
      <Covid />
      <header className='w-full h-screen flex flex-col justify-center items-center'>
        <NavBar logo={logo} />
        <section className='w-full h-full flex justify-center'>
          <div className='w-11/12 h-5/6 mt-3 rounded-xl bg-no-repeat bg-cover flex justify-center items-center flex-col' style={{ backgroundImage: `url(${heroImage})` }}>
            <h1 className='text-4xl mb-5 text-clr font-bold'>Enjoy Your Dream Vacation</h1>
            <p className='text-center text-clr text-base'>
              Plan and book your perfect trip with expert advice, travel tips, destination
              <br />
              information, and inspiration from us
            </p>
          </div>
          <SearchBar />
        </section>
        
      </header>
      <section className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='w-11/12 h-16 rounded-lg flex items-center pl-4 bg-yellow-200'>
          <FontAwesomeIcon className='text-4xl text-yellow-900' icon={faTriangleExclamation} />
          <p className='ml-4 '>Check the latest COVID-19 restrictions before you travel.</p><a className="text-primary ml-2 cursor-pointer" id='learnBtn'     >Learn more</a>
        </div>
        <div className='w-11/12 h-full flex flex-col'>
          <div className='w-full h-3/5 flex flex-col justify-center gap-5 p-10'>
            <h1 className='text-4xl font-bold'>Enjoy Your Dream Vaction</h1>
            <p className='font-light text-sm'>Plan and book our perfect trip with expert advice, travel tips, destination information and <br /> inspiration from us</p>
          </div>
          <div className='w-full h-full gap-4 flex p-5 items-center justify-center'>
            <div className='w-2/5 h-[95%] rounded-xl'>
              <img src={australia} alt='australia' className='w-full object-cover' />
              <h1 className='text-2xl font-semibold mt-3'>Australia</h1>
              <p className='text-sm mt-2'>2246 proprites</p>
            </div>
            <div className='w-2/5 h-[95%] rounded'>
              <img src={japan} alt='japan' className='w-full object-cover' />
              <h1 className='text-2xl font-semibold mt-3'>japan</h1>
              <p className='text-sm mt-2'>2246 proprites</p>
            </div>
            <div className='w-2/5 h-[95%] rounded-xl'>
              <img src={newZelanda} alt='new zelanda' className='w-full object-cover' />
              <h1 className='text-2xl font-semibold mt-3'>New Zelanda</h1>
              <p className='text-sm mt-2'>2246 proprites</p>
            </div>
            <div className='w-2/5 h-[95%] rounded-xl'>
              <img src={greece} alt='Greece' className='w-full object-cover' />
              <h1 className='text-2xl font-semibold mt-3'>Greece</h1>
              <p className='text-sm mt-2'>2246 proprites</p>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full h-[60vh] flex flex-col items-center'>
        <div className='w-11/12 h-[20%] flex items-center p-4'>
          <h1 className='text-3xl font-bold'>Get Inspiration For Your Next Trip</h1>
        </div>
        <div className='w-11/12 h-80 flex gap-8 items-center justify-center'>
          <div
            className='w-full h-full bg-no-repeat bg-cover rounded-md flex flex-col p-3 justify-end'
            style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
          >
            <h1 className='text-clr text-2xl'>Sydeny’s 10 most fashionable 5 star hotels</h1>
            <p className='text-clr font-extralight text-sm mt-2 mb-4'>Browse the fastest growing tourism sector in the heart of Australia tourism capital ....</p>
          </div>

          <div className='w-full h-full rounded-md flex flex-col p-3 justify-end' style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
            <h1 className='text-clr text-2xl'>Top cities for Vegan Travellers</h1>
            <p className='text-clr font-extralight text-sm mt-2 mb-4'>Top sites where you do not have to worry about being a vegan. Our tourist guide is here...</p>
          </div>
          <div className='w-full h-full rounded-md flex flex-col p-3 justify-end' style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-clr text-2xl'>World’s top destinations during and post covid timeline</h1>
            <p className='text-clr font-extralight text-sm mt-2 mb-4'>Pandemic is still intact and will be here for a longer time. Here’s where your next destination...</p>
          </div>
        </div>
      </section>
      <section className='w-full h-[70vh] flex flex-col items-center justify-center'>
        <div className='w-11/12 h-[15%] flex items-center p-2'>
          <h1 className='text-3xl font-bold'>Popular Hotels</h1>
        </div>
        <div className='w-11/12 h-full gap-3 flex items-center justify-center'>
          <div className='w-3/4 h-5/6'>
            <img className='object-cover w-full h-5/6 rounded-md' src={img4} alt="" />
            <h1 className='text-xl font-bold'>Lakeside Motel Warefront</h1>
            <p className='text-sm mt-1'>2246 properties</p>
          </div>
          <div className='w-3/4 h-5/6'>
            <img className='object-cover w-full h-5/6 rounded-md' src={img5} alt="" />
            <h1 className='text-xl font-bold'>Recce Graham resort</h1>
            <p className='text-sm mt-1'>2246 properties</p>
          </div>
          <div className='w-3/4 h-5/6'>
            <img className='object-cover w-full h-5/6 rounded-md' src={img6} alt="" />
            <h1 className='text-xl font-bold'>Fireside Dinners</h1>
            <p className='text-sm mt-1'>2246 properties</p>
          </div>
          <div className='w-3/4 h-5/6'>
            <img className='object-cover w-full h-5/6 rounded-md' src={img7} alt="" />
            <h1 className='text-xl font-bold'>Oculous Inn Stay</h1>
            <p className='text-sm mt-1'>2246 properties</p>
          </div>
        </div>
      </section>
      <section className='w-full h-screen flex flex-col items-center justify-center'>
        <div className='w-11/12 h-4/5 bg-cover flex justify-center flex-col relative'>
          <img src={imgMobile} alt="img mobile" className='w-full h-auto absolute' />
          <h1 className='z-10 ml-10 text-3xl font-bold text-clr'>Download the mobile application for bonus<br /> coupons and travel codes</h1>
          <Button className={`z-10 relative left-5 w-[300px] h-[50px] ml-10 mt-7`}> Download Mobile App </Button>
        </div>
        <div className='w-11/12 h-3/5 flex flex-col gap-6 justify-center items-center'>
          <h1 className='text-3xl font-bold'>Explore the world with My Dream place</h1>
          <a className='text-primary' href="">Discover new places and experiences</a>
        </div>
      </section>
      <Footer />
    </>
  );
}
