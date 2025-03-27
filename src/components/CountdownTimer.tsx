"use client";

import { useEffect, useState } from "react";

type CountdownTimerProps = {
  targetDate: Date;
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center lg:justify-start items-center gap-2 lg:gap-4 my-8">
      <TimeBlock value={timeLeft.days} label="Dias" />
      <Divider />
      <TimeBlock value={timeLeft.hours} label="Horas" />
      <Divider />
      <TimeBlock value={timeLeft.minutes} label="Minutos" />
      <Divider />
      <TimeBlock value={timeLeft.seconds} label="Segundos" />
    </div>
  );
};

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-[#5d2217]">{value}</div>
    <div className="text-xs text-[#5d2217]">{label}</div>
  </div>
);

const Divider = () => (
  <div className="text-3xl text-[#d42e12] font-light">|</div>
);

export default CountdownTimer;