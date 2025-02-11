import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import logo from '../assets/logo.png';
import '../index.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase'

export default function LoginPage() {
    const [isOpen, isClosed] = useState(faEye);
    const [textShow, textHide] = useState(false);

    const { user } = useContext(AuthContext)

    const hatchingPass = () => {
        textHide(!textShow)
        if (isOpen === faEye) {
            isClosed(faEyeSlash)
        }
        else {
            isClosed(faEye)
        }
    }
    const navigate = useNavigate();
    const handleSign = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate('/luxury-hotel');
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    return (
        <section className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='w-11/12 flex items-center pl-10 h-24'>
                <img src={logo} alt="" />
            </div>
            <div className='w-11/12 flex justify-center items-center h-full'>
                <div className='w-2/5 h-5/6 flex flex-col items-center'>
                    <h1 className='text-3xl'>Sign In</h1>
                    <form action="">
                        <label htmlFor="email">Email</label>
                        <div className='w-96 h-12 rounded-md bg-gray-100 flex'>
                            <input type="email" name="email" placeholder="example@domain.com" id="email" className='w-full h-full bg-inputs-color pl-3 text-lg font-normal' />
                        </div>
                        <div className='mt-6'>
                            <label htmlFor="password">Password</label>
                            <div className='flex relative'>
                                <input type={textShow ? 'text' : 'password'} name="pass" id="password" className='w-full h-12 bg-inputs-color pl-3 text-lg font-semibold' />
                                <FontAwesomeIcon onClick={hatchingPass} icon={isOpen} className='absolute right-3 top-4 cursor-pointer text-gray-500 text-xl' />
                            </div>
                        </div>
                        <div className='w-full h-10 mt-3 flex'>
                            <div className='w-full h-full flex gap-5 items-center'>
                                <input type="checkbox" name="remember" id="remember" className='w-5 h-5' />
                                <h1 className='text-sm'>Keep me Signed in</h1>
                            </div>
                            <div className='w-full h-full flex justify-end items-center'>
                                <a href="" className='text-primary'>Forgot Password?</a>
                            </div>
                        </div>
                        <div className='w-full h-12 mt-4 flex justify-center items-center'>
                            <a href="" className='w-full h-full rounded-md grid place-content-center bg-primary text-clr'>Continue</a>
                        </div>
                        <div className='w-full h-8 mt-4 flex justify-center items-center relative'>
                            <span className='absolute w-full border border-gray-300 '></span>
                            <h1 className='text-sm bg-clr z-10 pl-2 pr-2'>Or use one of these options</h1>
                        </div>
                        <div className='w-full h-2/6 gap-3 flex flex-col items-center mt-4'>
                            <a c onClick={handleSign} className='w-full cursor-pointer h-full gap-3 border-2 rounded-md bg-clr flex items-center justify-center'>
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
                    </form>
                </div>
            </div>
        </section>
    );
}