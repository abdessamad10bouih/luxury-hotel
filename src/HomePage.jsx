import React, { useEffect, useState } from 'react';
import NavBar from './components/navBar';
import heroImage from './assets/hero-image.png';
import australia from './assets/australia.png';
import japan from './assets/japan.png';
import newZelanda from './assets/newzelanda.png';
import greece from './assets/greece.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faUser, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { motion } from "framer-motion";
import { fadeIn, scaleBtn } from './variants';
import Covid from './components/covid';

export default function HomePage() {

    useEffect(() => {
        $('#city').on('input', function () {
            const query = $(this).val();

            // if (query.length < 3) {
            //     $('#suggestions').empty();
            //     return;
            // }

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
    const [isVisible, setIsVisible] = useState(false);

  const isClicked = () => {
    setIsVisible(true);
  };
    return (
        <>
            <Covid />
            <header className='w-full h-screen flex flex-col justify-center items-center'>
                <NavBar />
                <section className='w-full h-full flex justify-center'>
                    <div className='w-11/12 h-5/6 mt-3 rounded-xl bg-no-repeat bg-cover flex justify-center items-center flex-col' style={{ backgroundImage: `url(${heroImage})` }}>
                        <h1 className='text-4xl mb-5 text-clr font-bold'>Enjoy Your Dream Vacation</h1>
                        <p className='text-center text-clr text-base'>
                            Plan and book your perfect trip with expert advice, travel tips, destination
                            <br />
                            information, and inspiration from us
                        </p>
                    </div>
                    <div className='absolute bottom-16 rounded-xl gap-4 bg-clr w-10/12 h-20 shadow-lg flex items-center pl-4 pr-4 pt-2 pb-2'>
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
                            <a href="" className='text-clr bg-primary w-full h-full grid place-content-center rounded-md text-xl'>Search</a>
                        </div>
                    </div>
                </section>
            </header>
            <section className='w-full h-screen flex flex-col justify-center items-center'>
                    <div className='w-11/12 h-16 rounded-lg flex items-center pl-4 bg-yellow-200'>
                            <FontAwesomeIcon className='text-4xl text-yellow-900' icon={faTriangleExclamation} />
                            <p className='ml-4 '>Check the latest COVID-19 restrictions before you travel.</p><a className="text-primary ml-2 cursor-pointer" id='learnBtn' onClick={isClicked}>Learn more</a>
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
        </>
    );
};
