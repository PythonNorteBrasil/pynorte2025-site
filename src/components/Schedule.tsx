"use client"

import { useScopedI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import keynotes from "../data/keynotes.json";
import { useState } from "react";

type ScheduleItem = {
  id: number;
  title: string;
  time: string;
  day: number;
  type?: 'keynote' | 'activity';
  name?: string;
  description?: string;
};

const Schedule = () => {
  const t = useScopedI18n("component.schedule");
  const [activeDay, setActiveDay] = useState(1); // 1: Friday (04/07), 2: Saturday (05/07)

  const getDayKeyword = (day: number) => {
    switch (day) {
      case 1: return "4 de Julho";
      case 2: return "5 de Julho";
      default: return "4 de Julho";
    }
  };

  const renderScheduleItems = () => {
    const allItems: ScheduleItem[] = [
      ...keynotes.keynotes.map(keynote => ({
        ...keynote,
        type: 'keynote' as const
      })),
      ...keynotes.activities.map(activity => ({
        ...activity,
        type: 'activity' as const
      }))
    ].filter(item => item.day === activeDay);

    const sortedItems = allItems.sort((a, b) => {
      const timeA = a.time.includes(' - ')
        ? a.time.split(' - ')[1]
        : a.time.split(' - ')[0];
      const timeB = b.time.includes(' - ')
        ? b.time.split(' - ')[1]
        : b.time.split(' - ')[0];

      return timeA.localeCompare(timeB);
    });

    return (
      <div className="flex flex-col gap-[15px] w-full">
        {sortedItems.map((item) => (
          <div key={`${item.type}-${item.id}`} className="flex w-full items-center gap-6">
            <div className="w-[212px] bg-tacaca-alternative flex items-center gap-[9px] p-[6px] rounded-[9px]">
              <Clock className="h-5 w-5 text-theme-primary" />
              <span className="text-theme-primary">
                {item.time.includes(' - ') ? item.time.split(' - ')[1] : item.time}
              </span>
            </div>
            <div className={`flex-1 bg-theme-primary flex justify-center items-center p-[6px] rounded-[9px]`}>
              <span className="text-theme-background">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="schedule" className="py-20 bg-theme-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-[30px]">
          {/* Title */}
          <h2 className="text-4xl font-mono font-medium text-theme-primary text-center">
            {t("title")}
          </h2>

          {/* Day tabs */}
          <div className="flex justify-stretch w-full gap-6">
            <Button
              variant="outline"
              className={`flex-1 h-auto py-3 border border-jiboia rounded-[9px] ${activeDay === 1
                ? "bg-jiboia text-theme-background"
                : "bg-transparent text-jiboia"
                } font-medium`}
              onClick={() => setActiveDay(1)}
            >
              Sexta (04/07)
            </Button>
            <Button
              variant="outline"
              className={`flex-1 h-auto py-3 border border-jiboia rounded-[9px] ${activeDay === 2
                ? "bg-jiboia text-theme-background"
                : "bg-transparent text-jiboia"
                } font-medium`}
              onClick={() => setActiveDay(2)}
            >
              Sábado (05/07)
            </Button>
          </div>

          {renderScheduleItems()}
        </div>
      </div>
    </section>
  );
};

export default Schedule;