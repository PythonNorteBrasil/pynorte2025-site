"use client";

import sponsors from "@/data/sponsors.json";
import { useScopedI18n } from "@/locales/client";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-theme-green text-center mb-12">
          {t("title")}
        </h2>
        <div className="space-y-16">

          {levels.map((level) => (
            <div key={level.key} className="text-center">
              <h3 className="text-2xl font-semibold text-theme-brown mb-8">
                {level.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {sponsors.sponsors[level.key as keyof typeof sponsors.sponsors].map((sponsor) => (
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
        </div>
      </div>
    </section>
  );
};

export default Sponsors;