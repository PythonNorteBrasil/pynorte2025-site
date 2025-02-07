import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import calendar from "../data/calendar.json";
import { useTranslation } from "react-i18next";

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState("2025-07-04");
  const { t } = useTranslation();

  const days = [
    { date: "2025-07-04", label: "Quinta-feira, 4 de julho" },
    { date: "2025-07-05", label: "Sexta-feira, 5 de julho" },
    { date: "2025-07-06", label: "Sábado, 6 de julho" },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-mono font-light text-theme-primary text-center mb-12">
        {t("calendar.title")}
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
        {calendar[selectedDay].map((event, index) => (
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
