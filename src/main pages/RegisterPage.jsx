import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import mailBox from '../assets/emailBox.png';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
    const [nextStep, setNextStep] = useState('first page');
    const [eyeOpen, setEyeOpen] = useState(faEye);
    const [textShow, setTextShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });

    const formAutoSubmit = (e) => {
        e.preventDefault();
    };

    const buttonAutoSubmit = (e) => {
        e.preventDefault();
        if (nextStep === 'first page') {
            if (validateEmail(email)) {
                setNextStep('second page');
            }
        } else if (nextStep === 'second page') {
            if (validatePassword(password, confirmPassword)) {
                setNextStep('third page');
            }
        }
    };

    const validateEmail = (email) => {
        let emailError = '';
        if (!email) {
            emailError = toast('Email is required.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            emailError = toast('Email address is invalid.');
        }

        setErrors({ ...errors, email: emailError });
        return !emailError;
    };

    const validatePassword = (password, confirmPassword) => {
        let passwordError = '';
        let confirmPasswordError = '';

        if (!password) {
            passwordError = toast('Password is required.');
        } else if (password.length < 10) {
            passwordError = toast('Password must be at least 10 characters.');
        } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
            passwordError = toast('Password must include uppercase, lowercase, and a number.');
        }

        if (password !== confirmPassword) {
            confirmPasswordError = 'Passwords do not match.';
        }

        setErrors({ ...errors, password: passwordError, confirmPassword: confirmPasswordError });
        return !passwordError && !confirmPasswordError;
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const textShowing = () => {
        setTextShow(!textShow);
        setEyeOpen(textShow ? faEye : faEyeSlash);
    };

    const variants = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
    };

    return (
        <section className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='w-11/12 flex items-center pl-10 h-24'>
                <img src={logo} alt="" />
            </div>
            <form onSubmit={formAutoSubmit} className='w-full h-full flex flex-col items-center justify-center'>
                <motion.div layout className='w-2/6 h-full flex flex-col items-center'>
                    <AnimatePresence mode='wait'>
                        {nextStep === 'first page' && (
                            <motion.div
                                key="first-page"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 0.5 }}
                                className='w-full h-full flex flex-col items-center'
                            >
                                <h1 className='text-3xl font-bold'>Register</h1>
                                <div className='w-full h-20 mt-4 flex flex-col'>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" value={email} onChange={handleEmailChange} name="email" id="email" className='w-full h-full bg-inputs-color pl-3 rounded-md focus:outline-primary' />
                                </div>
                                <div className='w-full h-12 mt-4 flex justify-center items-center'>
                                    <button onClick={buttonAutoSubmit} className='w-full h-full rounded-md grid place-content-center bg-primary text-clr'>Continue</button>
                                    <ToastContainer />
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
                                    <h1>Already have an Account ?<Link className='text-primary' to="/login">Login</Link></h1>
                                </div>
                            </motion.div>
                        )}
                        {nextStep === 'second page' && (
                            <motion.div
                                key="second-page"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 0.5 }}
                                className='w-full h-[90%] flex flex-col items-center'
                            >
                                <h1 className='text-3xl font-bold'>Create Password</h1>
                                <p className='font-thin text-sm mt-4 mb-4 text-center'>Use a minimum of 10 characters, including letters,<br /> lowercase letters, and numbers.</p>
                                <div className='w-full h-20 mt-4 flex flex-col relative'>
                                    <label htmlFor="password" className='z-10'>Password</label>
                                    <input type={textShow ? 'text' : 'password'} value={password} onChange={handlePasswordChange} name="password" id="password" className='w-full h-14 top-6 bg-inputs-color pl-3 rounded-md focus:outline-primary' />
                                    <FontAwesomeIcon onClick={textShowing} icon={eyeOpen} className='absolute text-2xl right-4 cursor-pointer top-10' />
                                </div>
                                <div className='w-full h-20 mt-4 flex flex-col relative'>
                                    <label htmlFor="ConfirmPassword" className='z-10'>Confirm Password</label>
                                    <input type={textShow ? 'text' : 'password'} value={confirmPassword} onChange={handleConfirmPasswordChange} name="ConfirmPassword" id="ConfirmPassword" className='w-full h-14 top-6 bg-inputs-color pl-3 rounded-md focus:outline-primary' />
                                    <FontAwesomeIcon onClick={textShowing} icon={eyeOpen} className='absolute text-2xl right-4 cursor-pointer top-10' />
                                </div>
                                <div className='w-full h-20 mt-4 flex justify-center items-center'>
                                    <button onClick={buttonAutoSubmit} className='w-full h-full rounded-md grid place-content-center bg-primary text-clr'>Continue</button>
                                    <ToastContainer />
                                </div>
                                <div className='w-full h-8 mt-4 flex justify-center items-center relative'>
                                    <span className='absolute w-full border border-gray-300 '></span>
                                    <h1 className='text-sm bg-clr z-10 pl-2 pr-2'>Or use one of these options</h1>
                                </div>
                                <div className='w-full h-2/5 gap-3 flex flex-col items-center mt-4'>
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
                                    <h1 className='font-thin mt-6'>By creating an account, you agree with our <Link className='text-primary' to="/register">Terms and Conditions and Privacy Statement.</Link></h1>
                                </div>
                            </motion.div>
                        )}
                        {nextStep === 'third page' && (
                            <motion.div
                                key="third-page"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 0.5 }}
                                className='w-full h-full flex flex-col items-center'
                            >
                                <div className='w-full h-full flex flex-col justify-center items-center'>
                                    <img src={mailBox} alt="mailBox" />
                                    <h1 className='text-2xl font-bold mt-5'>Check your inbox</h1>
                                    <p className='text-center mt-5 text-md'>We have just emailed you the instructions and a reset password link to <strong>{email}</strong>. It might take a few minutes to arrive.</p>
                                    <button onClick={buttonAutoSubmit} className='w-full h-12 mt-5 rounded-md grid place-content-center bg-primary text-clr'>Continue</button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </form>
        </section>
    );
}
