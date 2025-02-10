"use client"

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import calendar from "@/data/calendar.json";
import { useScopedI18n } from "@/locales/client";

const Calendar = () => {
  const t = useScopedI18n("page.calendar");

  const [selectedDay, setSelectedDay] = useState<"2025-07-04" | "2025-07-05" | "2025-07-06">("2025-07-04");

  const days: { date: "2025-07-04" | "2025-07-05" | "2025-07-06", label: string }[] = [
    { date: "2025-07-04", label: t("thursday") },
    { date: "2025-07-05", label: t("friday") },
    { date: "2025-07-06", label: t("saturday") },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-mono font-light text-theme-primary text-center mb-12">
        {t("title")}
      </h1>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        {days.map((day) => (
          <button
            key={day.date}
            onClick={() => setSelectedDay(day.date)}
            className={cn(
              "px-6 py-3 rounded-full whitespace-nowrap",
              selectedDay === day.date
                ? "bg-theme-warning text-white"
                : "bg-theme-background text-theme-primary hover:bg-theme-warning/10"
            )}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {calendar[selectedDay].map((event: { title: string, speaker: string, time: string, room: string }, index: number) => (
          <div
            key={index}
            className="bg-theme-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-wrap gap-4 items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-theme-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-jiboia mb-2">{event.speaker}</p>
                <div className="flex flex-wrap gap-4 text-sm text-jiboia">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.room}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
