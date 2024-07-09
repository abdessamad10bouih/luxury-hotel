import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import '../index.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import { Link } from 'react-router-dom';
import Button from '../components/button';


export default function Registerpage() {
  return (
    <section className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='w-11/12 h-20 flex items-center pl-5 '>
            <img src={logo} alt="logo" />
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='w-2/6 h-5/6 flex flex-col items-center'>
                <h1 className='text-3xl font-bold'>Register</h1>
                <div className='w-full h-20 mt-4 flex flex-col'>
                    <label htmlFor="email">Email Adresse</label>
                    <input type="email" name="email" id="email" className='w-full h-full bg-inputs-color pl-3 rounded-md focus:outline-primary' />
                </div>
                  <div className='w-full h-12 mt-4 flex justify-center items-center'>
                      <a href="" className='w-full h-full rounded-md grid place-content-center bg-primary text-clr'>Continue</a>
                  </div>
                  <div className='w-full h-8 mt-4 flex justify-center items-center relative'>
                      <span className='absolute w-full border border-gray-300 '></span>
                      <h1 className='text-sm bg-clr z-10 pl-2 pr-2'>Or use one of these options</h1>
                  </div>
                  <div className='w-full h-1/5 gap-3 flex flex-col items-center mt-4'>
                      <a href="" className='w-full h-full gap-3 border-2 rounded-md bg-clr flex items-center justify-center'>
                          <img src={google} alt="google logo" />
                          <h1>Sign in with google</h1>
                      </a>
                      <a href="" className='w-full gap-3 h-full rounded-md bg-hover flex items-center justify-center'>
                          <img src={facebook} alt="facebook logo" />
                          <h1 className='text-clr'>Sign In with Facebook</h1>
                      </a>
                  </div>
                  <div className='w-full h-6 mt-4 grid place-content-center'>
                      <h1>Don't have an account? <Link className='text-primary' to="/register" href="" >Register</Link></h1>
                  </div>
            </div>
        </div>
    </section>
  )
}

