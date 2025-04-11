"use client";

import { useScopedI18n } from "@/locales/client";
import Image from "next/image";

const Location = () => {
  const t = useScopedI18n("component.location");

  const googleMapsIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.1401361307472!2d-48.47846231750041!3d-1.4387127775476543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48ea7879bca93%3A0xd1eb9c08b4629a11!2sUNAMA%20-%20Alcindo%20Cacela!5e0!3m2!1spt-BR!2sus!4v1738853698511!5m2!1spt-BR!2sus"

  return (
    <section id="local" className=" bg-theme-background relative my-10">
      <div className="w-full container py-8 md:py-0 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left column with text */}
          <div className="w-full md:w-[50%] flex flex-col gap-8 z-10 py-2 px-6 rounded-lg backdrop-blur-md">
            <div className="flex flex-col gap-8">
              <h2 className="text-[30px] font-medium text-acai font-mono">
                {t("title")}
              </h2>
              <div>
                <p className="text-[18px] text-cabocla-alternative font-medium">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>

          {/* Right column with map */}
          <div className="w-full md:w-[50%] relative z-10">
            <div className="rounded-sm overflow-hidden shadow-xl">
              <iframe
                src={googleMapsIframeUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={t("maps.title")}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Full width boat image at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[40%] max-h-[250px] overflow-hidden">
        <Image
          src="/boat.png"
          alt="Colorful boats illustration"
          width={1400}
          height={150}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>
    </section>
  );
};

export default Location;