"use client"

import { useScopedI18n, useCurrentLocale } from "@/locales/client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faqsEn from "@/data/faq.en.json";
import faqsPt from "@/data/faq.pt.json";

const FAQ = () => {
  const t = useScopedI18n("component.faq");
  const locale = useCurrentLocale();

  const faqs = locale === "pt" ? faqsPt : faqsEn;

  return (
    <section id="faq" className="py-20 bg-theme-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-jambu text-center mb-12">
          {t("title")}
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-white rounded-lg shadow-md"
            >
              <AccordionTrigger className="px-6 text-jambu hover:text-jiboia">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 text-jiboia">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;