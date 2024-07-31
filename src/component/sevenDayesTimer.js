import React, { useState, useEffect } from 'react';

import "../css/sevenDayesTimer.css";
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 0, 0, 0); // 7 days from now at midnight
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = 23 - now.getHours();
      const minutes = 59 - now.getMinutes();
      const seconds = 59 - now.getSeconds();
      
      timeLeft = {
        days,
        hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: '00',
        seconds: '00',
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="week-countdown">
        <div className='weekCountdown d-flex align-items-center justify-content-center gap-4'>
            <div className='dayesSec'>
                <p>{timeLeft.days}</p>
                <p>Days</p>
            </div>
            <div className='hoursSec'>
                <p>{timeLeft.hours}</p>
                <p>Hours</p>
            </div>
            <div className='minSec'>
                <p>{timeLeft.minutes}</p>
                <p>Minutes</p>
            </div>
            <div className='SecondSec'>
                <p>{timeLeft.seconds}</p>
                <p>Second</p>
            </div>
        </div>
    </div>
  );
};

export default CountdownTimer;

