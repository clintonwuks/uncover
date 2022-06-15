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
            <div id='countdownTimer'>
                <div id='icon' className='mdi mdi-calendar-clock ' style={{fontSize : '100px', color: 'green'}}>
                    
                </div>
                    <span className='timer '>
                        <span>{timeLeft.days}</span>
                        <span>days</span>
                        <span>{timeLeft.hours}</span>
                        <span>hours</span>
                        <span>{timeLeft.minutes}</span>
                        <span>minutes</span>
                        <span>{timeLeft.seconds}</span>
                        <span>seconds</span>
                    </span>
            </div>
    );
}

export default CountdownTimer;