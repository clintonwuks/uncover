import React from 'react';
import CountdownTimer from '../Components/CountdownTimer/CountdownTimer.jsx';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import  '../../src/landing.css';

function Landing() {

    return (
        <div className= 'd-flex flex-column min-vh-100'>
            <Header />

            <div className= 'bg-image'>
                <div className="container mx-auto text-center" >
                    <CountdownTimer countdownTimeStampMs={1660953600000} />
                </div>

                <div className= 'background '>
                    <p> Register your Team </p>
                </div>
            </div>
            <div className='mt-auto'>
                <Footer/>
            </div>
            
        </div>
    );
}

export default Landing;