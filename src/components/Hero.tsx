"use client";

import { Button } from "@/components/ui/button";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import Link from "next/link";

const Hero = () => {
  const t = useScopedI18n("component.hero");
  const locale = useCurrentLocale();
  // Python Norte 2025 event date (July 4, 2025 at 9:00 AM UTC-3)
  const eventDate = new Date("2025-07-04T12:00:00Z");

  const currentDate = new Date();
  const isEventDay = true;
  const isPostEventDay =
    currentDate.getDate() === 8 &&
    currentDate.getMonth() === eventDate.getMonth() &&
    currentDate.getFullYear() === eventDate.getFullYear();

  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-theme-background overflow-hidden mt-10"
    >
      <div className="container mx-auto px-0 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:text-left lg:flex lg:justify-start">
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

            <div className="flex flex-row items-end justify-between gap-2 mb-6">
              <div className="w-1/2 flex justify-start">
                <a
                  href="https://open.spotify.com/playlist/4fApbcmVbmYJcUIXYtxwUw"
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

              <div className="w-full flex flex-col justify-end items-end">
                <div className="flex flex-col items-end w-full">
                  <div className="text-2xl text-acai mb-2 font-medium text-center lg:text-right">
                    {t("missItAlready")}
                  </div>
                  <div className="bg-[#F28E894D] rounded-lg px-4 py-2 text-center lg:text-right text-acai w-full">
                    {t("accessRepository")}
                  </div>
                </div>
              </div>
            </div>

            <Button className="bg-jiboia text-tacaca hover:bg-jiboia-light text-lg px-8 py-6 mt-4 rounded-md transition-colors w-full">
              <Link
                href={
                  "https://www.flickr.com/photos/203114989@N04/albums/72177720327337621"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("photosAndMaterials")}
              </Link>
            </Button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-end">
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
