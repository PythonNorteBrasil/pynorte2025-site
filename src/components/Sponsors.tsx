"use client";

import sponsors from "@/data/sponsors.json";
import { useScopedI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";

const Sponsors = () => {
  const t = useScopedI18n("component.sponsors");

  const levels = [
    { key: "diamond", title: "Tacacá (Diamond)" },
    { key: "gold", title: "Camarão (Gold)" },
    { key: "silver", title: "Tucupi (Silver)" },
    { key: "bronze", title: "Flor de Jambu (Bronze)" },
    { key: "support", title: "Açaí (Support)" },
  ];

  return (
    <section id="sponsors" className="py-20 bg-theme-background">
      <div className="container mx-auto px-4">
        <div className="w-full  text-center px-4 flex flex-col gap-8 mt-4">
          <h3 className="text-3xl text-acai font-medium  font-mono">
            {t("title")}
          </h3>

          <p className="text-xl md:text-lg font-medium text-cabocla-alternative  mx-auto text-center">
            {t("description")}
          </p>
          <div className="flex justify-center">
            <Button className="bg-jiboia text-tacaca hover:bg-jiboia-light text-lg px-8 py-6 rounded-[9px] w-auto transition-colors mt-4 justify-center">
              <a
                href="https://drive.google.com/file/d/1xGBTYx9eaR7t4MTxQzQWyaAtv3ba_UVp/view"
                target="_blank"
              >
                {t("button")}
              </a>
            </Button>
          </div>
        </div>

        {/* <div className="space-y-16">
          {levels.map((level) => (
            <div key={level.key} className="text-center">
              <h3 className="text-2xl font-semibold text-theme-brown mb-8">
                {level.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {sponsors.sponsors[
                  level.key as keyof typeof sponsors.sponsors
                ].map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="hover:scale-105 transition-transform"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Sponsors;
