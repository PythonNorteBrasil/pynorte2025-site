"use client"

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

const CodeOfConduct = () => {
  const t = useScopedI18n("page.codeOfConduct");

  const handleReport = () => {
    window.location.href = "https://github.com/PythonNorteBrasil/pynorte2025-org/issues/url";

  };

  return (
    <div className="container mx-auto px-4 py-20">
      <article className="space-y-8">
        {/* Header */}
        <header className="my-8">
          <h1 className="font-mono text-h1 text-jambu mb-8">{t("title")}</h1>
        </header>

        {/* Introduction */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-jiboia">
            {t("introduction")}
          </p>

          <p className="text-lg leading-relaxed text-jiboia">
            {t("introduction2")}
          </p>
        </section>

        {/* Rules Section */}
        <section className="space-y-6">
          <h2 className="font-mono text-h4 text-jambu">
            {t("rules.title")}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-lg text-jiboia ml-4">
            <li>{t("rules.1")}</li>
            <li>{t("rules.2")}</li>
            <li>{t("rules.3")}</li>
          </ol>
        </section>

        {/* Definitions Section */}
        <section className="space-y-6">
          <h2 className="font-mono text-h4 text-jambu">
            {t("definitions.title")}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-jiboia ml-4">
            <li>{t("definitions.1")}</li>
            <li>{t("definitions.2")}</li>
            <li>{t("definitions.3")}</li>
          </ul>
        </section>

        {/* Additional Information */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-jiboia">
            {t("additionalInformation1")}
          </p>

          <p className="text-lg leading-relaxed text-jiboia">
            {t("additionalInformation2", {
              link: <a className="text-theme-warning hover:text-theme-warning/90 underline" href="https://github.com/PythonNorteBrasil/pynorte2025-org/issues/url">{t("additionalInformation2.link")}</a>
            })}
          </p>

          <p className="text-lg leading-relaxed text-jiboia">
            {t("additionalInformation3")}
          </p>
        </section>

        {/* Closing Statements */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-jiboia">
            {t("closingStatements1")}
          </p>

          <p className="text-lg leading-relaxed text-jiboia">
            {t("closingStatements2", {
              link: <a className="text-theme-warning hover:text-theme-warning/90 underline" href="https://apyb.python.org.br/pythonbrasil/cdc/">{t("closingStatements2.link")}</a>
            })}
          </p>
        </section>

        {/* Report Button */}
        <div className="mt-12 flex justify-center">
          <Button
            onClick={handleReport}
            className="bg-theme-warning hover:bg-theme-warning/90 text-white text-lg px-6 py-3"
          >
            <Send className="mr-2 h-5 w-5" />
            {t("reportButton")}
          </Button>
        </div>
      </article>
    </div>
  );
};

export default CodeOfConduct;