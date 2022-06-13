import React, {useState, useEffect } from 'react';
import '../countdownTimer.css';
const defaultTimeLeft = {
    seconds : '24',
    minutes : '45',
    hours : '34',
    days : '20',
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
        console.log('timer counting')
    }


    return (
            <div id='timer' className="">
                    <span className='countdown '>
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