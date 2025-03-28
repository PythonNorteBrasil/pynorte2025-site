"use client";

import { useScopedI18n } from "@/locales/client";
import { useEffect, useState } from "react";

type CountdownTimerProps = {
  targetDate: Date;
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const t = useScopedI18n("component.hero.timer");

  const [timeLeft, setTimeLeft] = useState({
    days: 100,
    hours: 12,
    minutes: 30,
    seconds: 30,
  });

  useEffect(() => {
    const getTimeLeft = () => {
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
    };

    getTimeLeft();
    const interval = setInterval(() => {
      getTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center lg:justify-end items-center gap-4 lg:gap-6 mt-2">
      <TimeBlock value={timeLeft.days} label={t("days")} />
      <Divider />
      <TimeBlock value={timeLeft.hours} label={t("hours")} />
      <Divider />
      <TimeBlock value={timeLeft.minutes} label={t("minutes")} />
      <Divider />
      <TimeBlock value={timeLeft.seconds} label={t("seconds")} />
    </div>
  );
};

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-acai">{value}</div>
    <div className="text-xs text-acai">{label}</div>
  </div>
);

const Divider = () => (
  <div className="w-[4px] h-[40px] bg-camarao" />
);

export default CountdownTimer;