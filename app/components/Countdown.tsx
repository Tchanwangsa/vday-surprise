"use client";

import type React from "react";
import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // ISO 8601 format with timezone
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    function calculateTimeLeft() {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    }

    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="text-center mb-4 p-2 fade-in">
      <div className="flex flex-wrap justify-center items-center gap-2 text-white">
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-bold">{timeLeft.days}</span>
          <span className="text-xs md:text-sm">DAYS</span>
        </div>
        <span className="text-xl md:text-2xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-bold">
            {addLeadingZero(timeLeft.hours)}
          </span>
          <span className="text-xs md:text-sm">HOURS</span>
        </div>
        <span className="text-xl md:text-2xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-bold">
            {addLeadingZero(timeLeft.minutes)}
          </span>
          <span className="text-xs md:text-sm">MINS</span>
        </div>
        <span className="text-xl md:text-2xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-bold">
            {addLeadingZero(timeLeft.seconds)}
          </span>
          <span className="text-xs md:text-sm">SECS</span>
        </div>
      </div>
      <h2 className="text-lg md:text-xl font-bold text-white mt-2">
        UNTIL I GET TO MELB ✈️✈️
      </h2>
    </div>
  );
};

export default Countdown;
