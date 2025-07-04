"use client";

import { useScopedI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import { Clock, ChevronDown, ChevronUp, MapPin, Users } from "lucide-react";
import schedule from "../data/schedule.json";
import { useState } from "react";
import Image from "next/image";

type EventType = "accreditation" | "coffee-break" | "ceremony" | "keynote" | "talks";

interface Talk {
  speaker: string;
  speakerImage: string;
  room: string;
  talkTitle: string;
  registrationLink: string;
}

interface EventContent {
  speaker?: string;
  speakerImage?: string;
  room?: string;
  talkTitle?: string;
  registrationLink?: string;
  talks?: Talk[];
  activities?: Talk[];
}

interface ScheduleEvent {
  id: string;
  time: string;
  type: EventType;
  title: string;
  expandable: boolean;
  isExpanded: boolean;
  content?: EventContent;
}

interface ScheduleDay {
  title: string;
  events: ScheduleEvent[];
}

interface ScheduleData {
  day1: ScheduleDay;
  day2: ScheduleDay;
}

const Schedule = () => {
  const t = useScopedI18n("component.schedule");
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  const scheduleData = schedule.scheduleData as ScheduleData;

  const toggleExpand = (eventId: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedEvents(newExpanded);
  };

  const getEventTypeColor = (type: EventType) => {
    switch (type) {
      case "accreditation":
        return "bg-acai text-theme-background";
      case "coffee-break":
        return "bg-acai text-theme-background";
      case "ceremony":
        return "bg-acai text-theme-background";
      case "keynote":
        return "bg-acai text-theme-background";
      case "talks":
        return "bg-acai text-theme-background";
      default:
        return "bg-acai text-theme-background";
    }
  };

  const renderTalkCard = (talk: Talk, index: number) => (
    <div key={index} className="bg-cabloca-light rounded-lg p-4 border-2 border-transparent hover:border-acai transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src={talk.speakerImage}
            alt={talk.speaker}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-acai mb-2">{talk.speaker}</h4>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-tacaca-alternative" />
            <span className="text-sm bg-tacaca-alternative px-3 py-1 rounded-full text-acai font-medium">
              {talk.room}
            </span>
          </div>
          <p className="text-sm text-acai mb-3 leading-relaxed">
            {talk.talkTitle}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="bg-cabocla-alternative text-theme-background hover:bg-cabocla border-cabocla-alternative"
          >
            {talk.registrationLink}
          </Button>
        </div>
      </div>
    </div>
  );

  const renderEventContent = (event: ScheduleEvent) => {
    if (!event.content) return null;

    if (event.type === "keynote" && event.content.speaker) {
      return (
        <div className="mt-4 pl-4">
          <div className="bg-cabloca-light rounded-lg p-6 border-2 border-transparent hover:border-acai transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={event.content.speakerImage!}
                alt={event.content.speaker}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-acai mb-2">{event.content.speaker}</h3>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-tacaca-alternative" />
                  <span className="bg-tacaca-alternative px-4 py-2 rounded-full text-acai font-medium">
                    {event.content.room}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-acai mb-4 leading-relaxed">
              {event.content.talkTitle}
            </p>
            <Button
              variant="outline"
              className="bg-cabocla-alternative text-theme-background hover:bg-cabocla border-cabocla-alternative"
            >
              {event.content.registrationLink}
            </Button>
          </div>
        </div>
      );
    }

    if (event.type === "talks" && event.content.talks) {
      return (
        <div className="mt-4 pl-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {event.content.talks.map((talk, index) => renderTalkCard(talk, index))}
          </div>
        </div>
      );
    }

    if (event.type === "accreditation" && event.content.activities) {
      return (
        <div className="mt-4 pl-4">
          <div className="grid grid-cols-1 gap-4">
            {event.content.activities.map((activity, index) => renderTalkCard(activity, index))}
          </div>
        </div>
      );
    }

    return null;
  };

  const renderScheduleEvents = () => {
    const currentDay = activeDay === 1 ? scheduleData.day1 : scheduleData.day2;

    return (
      <div className="flex flex-col gap-4 w-full">
        {currentDay.events.map((event) => {
          const isExpanded = expandedEvents.has(event.id);
          const hasContent = event.content && (
            (event.type === "keynote" && event.content.speaker) ||
            (event.type === "talks" && event.content.talks && event.content.talks.length > 0) ||
            (event.type === "accreditation" && event.content.activities && event.content.activities.length > 0)
          );

          return (
            <div key={event.id} className="w-full">
              <div className="flex w-full items-center gap-4">
                <div className="sm:w-[200px] w-[120px] bg-tacaca-alternative flex items-center justify-center gap-2 p-3 rounded-lg">
                  <Clock className="h-5 w-5 text-acai" />
                  <span className="text-acai font-medium text-sm">
                    {event.time}
                  </span>
                </div>
                <div
                  className={`flex-1 ${getEventTypeColor(event.type)} flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all duration-300 hover:opacity-90`}
                  onClick={() => event.expandable && hasContent && toggleExpand(event.id)}
                >
                  <span className="font-medium text-center flex-1">
                    {event.title}
                  </span>
                  {event.expandable && hasContent && (
                    <div className="ml-2">
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {isExpanded && renderEventContent(event)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="schedule" className="py-20 bg-theme-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Title */}
          <h2 className="text-4xl font-mono font-medium text-acai text-center">
            {t("title")}
          </h2>

          {/* Day tabs */}
          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <Button
              variant="outline"
              className={`flex-1 h-auto py-3 rounded-lg font-medium transition-all duration-300 ${activeDay === 1
                  ? "bg-acai text-theme-background border-acai"
                  : "bg-transparent text-acai border-acai hover:bg-acai hover:text-theme-background"
                }`}
              onClick={() => setActiveDay(1)}
            >
              Sexta (04/07)
            </Button>
            <Button
              variant="outline"
              className={`flex-1 h-auto py-3 rounded-lg font-medium transition-all duration-300 ${activeDay === 2
                  ? "bg-acai text-theme-background border-acai"
                  : "bg-transparent text-acai border-acai hover:bg-acai hover:text-theme-background"
                }`}
              onClick={() => setActiveDay(2)}
            >
              Sábado (05/07)
            </Button>
          </div>

          {/* Schedule Events */}
          {renderScheduleEvents()}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
