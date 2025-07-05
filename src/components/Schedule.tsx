"use client";

import { useScopedI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import { Clock, Coffee, Users, BookOpen, Mic, GraduationCap, MapPin } from "lucide-react";
import schedule from "../data/schedule.json";
import { useState } from "react";

type ScheduleItem = {
  id: number;
  title: string;
  time: string;
  day: number;
  type?: "keynote" | "activity";
  name?: string;
  description?: string;
  location?: string;
};

const Schedule = () => {
  const t = useScopedI18n("component.schedule");
  const [activeDay, setActiveDay] = useState(2); // 1: Friday (04/07), 2: Saturday (05/07)

  const getDayKeyword = (day: number) => {
    switch (day) {
      case 1:
        return "4 de Julho";
      case 2:
        return "5 de Julho";
      default:
        return "4 de Julho";
    }
  };

  const getActivityIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes("keynote")) return <Mic className="h-5 w-5" />;
    if (lowerTitle.includes("coffee") || lowerTitle.includes("almoço")) return <Coffee className="h-5 w-5" />;
    if (lowerTitle.includes("tutorial") || lowerTitle.includes("oficina")) return <BookOpen className="h-5 w-5" />;
    if (lowerTitle.includes("palestras relâmpagos")) return <GraduationCap className="h-5 w-5" />;
    if (lowerTitle.includes("credenciamento")) return <Users className="h-5 w-5" />;
    if (lowerTitle.includes("encerramento")) return <Mic className="h-5 w-5" />;

    return <BookOpen className="h-5 w-5" />;
  };

  const getActivityType = (title: string) => {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes("keynote")) return "keynote";
    if (lowerTitle.includes("tutorial") || lowerTitle.includes("oficina")) return "workshop";
    if (lowerTitle.includes("coffee") || lowerTitle.includes("almoço") || lowerTitle.includes("credenciamento")) return "break";
    if (lowerTitle.includes("palestras relâmpagos")) return "lightning";
    if (lowerTitle.includes("encerramento")) return "closing";

    return "talk";
  };

  const renderScheduleItems = () => {
    const allItems: ScheduleItem[] = [
      ...schedule.activities.map((activity) => ({
        ...activity,
        type: "activity" as const,
      })),
    ].filter((item) => item.day === activeDay);

    const sortedItems = allItems.sort((a, b) => {
      const timeA = a.time.includes(" - ")
        ? a.time.split(" - ")[0]
        : a.time;
      const timeB = b.time.includes(" - ")
        ? b.time.split(" - ")[0]
        : b.time;

      return timeA.localeCompare(timeB);
    });

    return (
      <div className="grid gap-4 w-full max-w-4xl mx-auto">
        {sortedItems.map((item) => {
          const activityType = getActivityType(item.title);
          const isKeynote = activityType === "keynote";
          const isWorkshop = activityType === "workshop";
          const isBreak = activityType === "break";
          const isLightning = activityType === "lightning";
          const isClosing = activityType === "closing";

          return (
            <div
              key={`${item.type}-${item.id}`}
              className={`
                relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg
                ${isKeynote
                  ? 'bg-blue-50 border-blue-200'
                  : isWorkshop
                    ? 'bg-blue-50 border-blue-200'
                    : isBreak
                      ? 'bg-green-50 border-green-200'
                      : isLightning
                        ? 'bg-yellow-50 border-yellow-200'
                        : isClosing
                          ? 'bg-red-50 border-red-200'
                          : 'bg-white border-gray-200'
                }
              `}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Time and Icon */}
                  <div className={`
                    flex items-center gap-3 px-4 py-2 rounded-lg min-w-[140px] flex-shrink-0
                    ${isKeynote
                      ? 'bg-blue-100 text-blue-700'
                      : isWorkshop
                        ? 'bg-blue-100 text-blue-700'
                        : isBreak
                          ? 'bg-green-100 text-green-700'
                          : isLightning
                            ? 'bg-yellow-100 text-yellow-700'
                            : isClosing
                              ? 'bg-red-100 text-red-700'
                              : 'bg-gray-100 text-gray-700'
                    }
                  `}>
                    <Clock className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">
                        {item.time.includes(" - ")
                          ? item.time.split(" - ")[0]
                          : item.time}
                      </span>
                      {item.time.includes(" - ") && (
                        <span className="text-xs opacity-75">
                          {item.time.split(" - ")[1]}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`
                        p-2 rounded-lg flex-shrink-0
                        ${isKeynote
                          ? 'bg-blue-100 text-blue-700'
                          : isWorkshop
                            ? 'bg-blue-100 text-blue-700'
                            : isBreak
                              ? 'bg-green-100 text-green-700'
                              : isLightning
                                ? 'bg-yellow-100 text-yellow-700'
                                : isClosing
                                  ? 'bg-red-100 text-red-700'
                                  : 'bg-gray-100 text-gray-700'
                        }
                      `}>
                        {getActivityIcon(item.title)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className={`
                          font-semibold text-lg leading-tight mb-1
                          ${isKeynote
                            ? 'text-gray-900'
                            : 'text-gray-900'
                          }
                        `}>
                          {item.title}
                        </h3>

                        {item.location && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Activity Type Badge */}
                    <div className="flex items-center gap-2">
                      <span className={`
                        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                        ${isKeynote
                          ? 'bg-blue-200 text-blue-800'
                          : isWorkshop
                            ? 'bg-blue-200 text-blue-800'
                            : isBreak
                              ? 'bg-green-200 text-green-800'
                              : isLightning
                                ? 'bg-yellow-200 text-yellow-800'
                                : isClosing
                                  ? 'bg-red-200 text-red-800'
                                  : 'bg-gray-200 text-gray-800'
                        }
                      `}>
                        {isKeynote && "Keynote"}
                        {isWorkshop && "Workshop"}
                        {isBreak && "Intervalo"}
                        {isLightning && "Relâmpago"}
                        {isClosing && "Encerramento"}
                        {!isKeynote && !isWorkshop && !isBreak && !isLightning && !isClosing && "Palestra"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="schedule" className="py-20 bg-theme-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-[30px]">
          {/* Title */}
          <h2 className="text-3xl font-mono font-medium text-theme-primary text-center">
            {t("title")}
          </h2>

          {/* Day tabs */}
          <div className="flex justify-stretch w-full gap-6 max-w-2xl mx-auto">
            <Button
              variant="outline"
              className={`flex-1 h-auto py-4 border-2 rounded-xl transition-all duration-300 ${activeDay === 1
                ? "bg-jiboia text-white border-jiboia shadow-lg scale-105"
                : "bg-white text-jiboia border-jiboia hover:bg-jiboia/5"
                } font-semibold text-lg`}
              onClick={() => setActiveDay(1)}
            >
              Sexta (04/07)
            </Button>
            <Button
              variant="outline"
              className={`flex-1 h-auto py-4 border-2 rounded-xl transition-all duration-300 ${activeDay === 2
                ? "bg-jiboia text-white border-jiboia shadow-lg scale-105"
                : "bg-white text-jiboia border-jiboia hover:bg-jiboia/5"
                } font-semibold text-lg`}
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
