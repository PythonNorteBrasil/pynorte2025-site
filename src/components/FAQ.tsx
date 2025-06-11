"use client";

import { useScopedI18n, useCurrentLocale } from "@/locales/client";
import { useState } from "react";

import faqsEn from "@/data/faq.en.json";
import faqsPt from "@/data/faq.pt.json";

const FAQ = () => {
  const t = useScopedI18n("component.faq");
  const locale = useCurrentLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = locale === "pt" ? faqsPt : faqsEn;

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className=" bg-theme-background">
      <div className="container mx-auto px-4">
        <div className="inline-flex flex-col justify-start items-start gap-11 w-full">
          <div className="self-stretch flex flex-col justify-start items-start gap-7">
            <h2 className="self-stretch text-center text-acai text-3xl font-medium font-mono">
              {t("title")}
            </h2>
          </div>

          <div className="inline-flex flex-col justify-start items-start gap-3.5 w-full">
            {faqs.faqs.map((faq) => (
              <div key={faq.id} className="w-full ">
                <button
                  className="self-stretch w-full py-2.5 px-1.5 bg-tacaca-alternative inline-flex justify-center items-center gap-2 rounded-[9px]"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="text-center text-acai text-base font-normal font-mono">
                    {faq.question}
                  </div>
                </button>

                {openFaq === faq.id && (
                  <div className="mt-2 p-4 bg-white rounded-lg">
                    <p className="text-jiboia font-mono">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
