"use client";

import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";


const Hero = () => {
  const t = useScopedI18n("component.hero");

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-theme-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('/background_hero.png')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 pt-16 text-center relative z-10">
        <img
          src="/logo_v1.png"
          alt="Python Norte 2025"
          className="mx-auto mb-6 h-32"
        />
        <p className="font-mono text-xl md:text-2xl text-primary mb-8 max-w-2xl mx-auto">
          {t("description")}
        </p>
        <p className="text-primary text-lg mb-8">
          {t("date")}
        </p>
        {process.env.NODE_ENV === "development" && (
          <Button className="bg-theme-warning hover:bg-theme-warning/90 text-white text-lg px-8 py-6">
            {t("register")}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;