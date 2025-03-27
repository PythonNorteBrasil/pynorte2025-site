"use client";

import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const t = useScopedI18n("component.hero");
  // Python Norte 2025 event date (July 4, 2025 at 9:00 AM UTC-3)
  const eventDate = new Date("2025-07-04T12:00:00Z");

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-theme-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 text-left">
            <img
              src="/logo_01.png"
              alt="Python Norte 2025"
              className="mb-6 h-32"
            />
            <h2 className="font-mono text-5xl text-[#5d2217] mb-4">de 4 a 6 de julho</h2>
            <p className="font-mono text-xl md:text-2xl text-[#d42e12] mb-8 max-w-2xl">
              {t("description")}
            </p>

            <div className="mt-8">
              <h3 className="text-2xl text-[#5d2217] mb-2">Contagem Regressiva</h3>
              <CountdownTimer targetDate={eventDate} />
            </div>

            <Button className="bg-[#a52a2a] hover:bg-[#8b0000] text-white text-lg px-8 py-6 mt-4 rounded-md w-full md:w-auto">
              Adquira seu Ingresso
            </Button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/event-participants.png"
                alt="Python Norte participants"
                className="max-h-[600px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;