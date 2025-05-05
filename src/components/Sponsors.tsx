"use client";

import { sponsors } from "@/data/sponsors.json";
import { useScopedI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import SponsorsLevel, { SponsorLevel } from "./ui/SponsorsLevel";

const Sponsors = () => {
  const t = useScopedI18n("component.sponsors");

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
        <div className="flex flex-wrap lg:flex-row flex-col justify-between lg:gap-y-[180px] gap-y-[50px] gap-x-[29px] lg:mt-[180px] mt-[50px]">
          <SponsorsLevel
            sponsors={sponsors.diamond}
            level={SponsorLevel.DIAMOND}
          />

          {/*   {process.env.NODE_ENV === "development" && (
            <>
              <SponsorsLevel
                sponsors={sponsors.gold}
                level={SponsorLevel.GOLD}
              />
              <SponsorsLevel
                sponsors={sponsors.silver}
                level={SponsorLevel.SILVER}
              />
              <SponsorsLevel
                sponsors={sponsors.diamond}
                level={SponsorLevel.BRONZE}
              />
            </>
          )} */}
          <SponsorsLevel
            sponsors={sponsors.support}
            level={SponsorLevel.SUPPORT}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
