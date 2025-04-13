"use client";

import { Button } from "@/components/ui/button";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import EventInfos from "./EventInfos";

const Description = () => {
  const t = useScopedI18n("page.description");
    const locale = useCurrentLocale();

  return (
    <div
      id="description"
      className="relative lg:min-h-screen flex items-center justify-center bg-theme-background overflow-hidden lg:mb-36"
    >
      <div className="container mx-auto px-0 py-16 relative lg:mb-24 ">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:text-left lg:flex lg:justify-between ">
          <div className="relative w-fit lg:m-5 hidden lg:block lg:w-1/2">
            <img
              src="/description-speaker-2.png"
              alt="Palestrante"
              className="relative  mt-12  z-10 max-h-[320px] sm:max-h-[405px] object-cover"
            />

            <img
              src="/description-speaker-1.png"
              alt="Palestrante"
              className="absolute top-48 right-0 shadow-xl z-20 max-h-[350px] sm:max-h-[435px] object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center px-4 ">
            <h3 className="text-2xl text-acai mb-2 font-medium  lg:text-left">
              {t("title")}
            </h3>

            <p className="text-xl md:text-lg font-medium text-cabocla-alternative mb-8 max-w-2xl mx-auto lg:text-left">
              {t("intro")}
            </p>

            <h3 className="text-xl text-acai mb-2 font-medium  lg:text-center">
              {t("intro2")}
            </h3>

            <Button className="bg-jiboia text-tacaca hover:bg-jiboia-light text-lg px-8 py-6 mt-4 rounded-md w-full md:w-auto transition-colors ">
              <a href={`/${locale}/code-of-conduct`}>
                {t("codeOfConduct-button")}
              </a>
            </Button>

            <div className="flex justify-center lg:justify-center mt-6">
              <EventInfos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
