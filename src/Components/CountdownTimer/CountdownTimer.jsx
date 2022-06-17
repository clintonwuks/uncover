import React, {useState, useEffect } from 'react';
import './countdownTimer.css';
import { getRemainingTimeUntilMsTimestamp } from './CountdownTimerUtils';

const defaultTimeLeft = {
    seconds : '00',
    minutes : '00',
    hours : '00',
    days : '00',
}

function CountdownTimer({countdownTimeStampMs}) {

    const [timeLeft, setTimeLeft]= useState(defaultTimeLeft);

    useEffect(() => {
       const intervalId = setInterval(() => {
           updateTimeLeft(countdownTimeStampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimeStampMs])
    
    function updateTimeLeft(countdown) {
        setTimeLeft(getRemainingTimeUntilMsTimestamp(countdown));
        }


    return (
            <section id='countdownTimer'>
                <div id='icon'>
                    <span className='mdi mdi-calendar-clock'></span>
                    <h4 style={{fontSize : '2em'}}>Get Me Litty</h4>
                    <p>Are you ready for the loudest event this summer?</p>
                </div>
                <span className='timer '>
                    <span>{timeLeft.days}</span>
                    <span>{timeLeft.hours}</span>
                    <span>{timeLeft.minutes}</span>
                    <span>{timeLeft.seconds}</span>
                    <span>days</span>
                    <span>hours</span>
                    <span>minutes</span>
                    <span>seconds</span>
                </span>
            </section>
    );
}

export default CountdownTimer;