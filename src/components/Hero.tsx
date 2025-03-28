"use client";

import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const t = useScopedI18n("component.hero");
  // Python Norte 2025 event date (July 4, 2025 at 9:00 AM UTC-3)
  const eventDate = new Date("2025-07-04T12:00:00Z");

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center bg-theme-background overflow-hidden">
      <div className="container mx-auto px-0 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 text-center px-4">
            <div className="flex justify-center">
              <img
                src="/logo_01.svg"
                alt="Python Norte 2025"
                className="mb-4 h-40"
              />
            </div>

            <p className="text-xl md:text-2xl font-medium text-jiboia-light mb-8 max-w-2xl mx-auto">
              {t("description")}
            </p>

            <div className="flex flex-row items-end justify-between gap-8 mb-6">
              <div className="w-full flex justify-start">
                <a
                  href="https://open.spotify.com/show/4RcjjmDqQcDCAK6mrRjCmO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <img
                    src="/vinil_para.png"
                    alt="Vinil"
                    className="max-h-[130px] object-contain"
                  />
                </a>
              </div>

              <div className="flex flex-col justify-end items-end">
                <h3 className=" text-2xl text-acai mb-2 font-medium text-center lg:text-right">{t("countdown")}</h3>
                <CountdownTimer targetDate={eventDate} />
              </div>
            </div>

            {process.env.NODE_ENV === "development" && (
              <div className="flex justify-center">
                <Button className="bg-jiboia text-tacaca hover:bg-jiboia-light text-lg px-8 py-6 mt-4 rounded-md w-full md:w-auto transition-colors">
                  {t("register")}
                </Button>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative xl:rounded-br-lg overflow-hidden">
              <img
                src="/event-participants.png"
                alt="Python Norte participants"
                className="max-h-[350px] sm:max-h-[600px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;