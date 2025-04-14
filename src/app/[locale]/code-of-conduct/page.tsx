"use client";

import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";

const CodeOfConduct = () => {
  const t = useScopedI18n("page.codeOfConduct");

  return (
    <div className="relative lg:min-h-screen flex flex-col items-center justify-center bg-theme-background overflow-hidden mx-auto pt-24  ">
      <article className="space-y-8 px-20 ">
        {/* Header */}
        <header className="mt-8">
          <h1 className="font-mono text-3xl text-acai mb-4 font-medium">
            {t("title")}
          </h1>
        </header>

        {/* Report Button */}
        <Button className="bg-jiboia text-tacaca hover:bg-jiboia-light text-lg px-20   rounded-md w-auto transition-colors ">
          <a href="https://forms.gle/e647Q7vXYhjFeN117">{t("reportButton")}</a>
        </Button>

        {/* Introduction */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-cabocla-alternative">
            {t("introduction")}
          </p>

          <p className="text-lg leading-relaxed text-cabocla-alternative">
            {t("introduction2")}
          </p>
        </section>

        {/* Rules Section */}
        <section className="space-y-6">
          <h2 className="font-mono text-2xl text-blue-800 font-medium">
            {t("rules.title")}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-lg text-cabocla-alternative ml-4">
            <li>{t("rules.1")}</li>
            <li>{t("rules.2")}</li>
            <li>{t("rules.3")}</li>
          </ol>
        </section>

        {/* Definitions Section */}
        <section className="space-y-6">
          <h2 className="font-mono text-2xl text-blue-800">
            {t("definitions.title")}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-cabocla-alternative ml-4">
            <li>{t("definitions.1")}</li>
            <li>{t("definitions.2")}</li>
            <li>{t("definitions.3")}</li>
          </ul>
        </section>

        {/* Additional Information */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-cabocla-alternative">
            {t("additionalInformation1")}
          </p>

          <p className="text-lg leading-relaxed text-cabocla-alternative">
            {t("additionalInformation2", {
              link: (
                <a
                  className="text-theme-warning hover:text-theme-warning/90 underline"
                  href="https://forms.gle/e647Q7vXYhjFeN117"
                >
                  {t("additionalInformation2.link")}
                </a>
              ),
            })}
          </p>

          <p className="text-lg leading-relaxed text-cabocla-alternative">
            {t("additionalInformation3")}
          </p>
        </section>

        {/* Closing Statements */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-cabocla-alternative">
            {t("closingStatements1")}
          </p>

          <p className="text-base leading-relaxed text-cabocla-alternative">
            {t("closingStatements2", {
              link: (
                <a
                  className="text-theme-warning hover:text-theme-warning/90 underline"
                  href="https://apyb.python.org.br/pythonbrasil/cdc/"
                >
                  {t("closingStatements2.link")}
                </a>
              ),
            })}
          </p>
        </section>
      </article>
      <img
        src="/code-of-conduct-team.png"
        alt="Palestrante"
        className="relative  mt-12 w-full z-10 max-h-[320px] sm:max-h-[405px] object-cover"
      />
    </div>
  );
};

export default CodeOfConduct;
