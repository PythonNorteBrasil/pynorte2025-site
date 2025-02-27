"use client"

import { useCurrentLocale, useScopedI18n } from '@/locales/client'
import { Button } from "./ui/button"

const Footer = () => {
  const t = useScopedI18n("component.footer");
  const locale = useCurrentLocale()

  const menuItems = [
    ...(process.env.NODE_ENV === "development" ? [
      { name: t("aboutTheEvent"), href: `/${locale}` },
      { name: t("eventLocation"), href: `/${locale}` },
      { name: t("experts"), href: `/${locale}` },
      { name: t("program"), href: `/${locale}` },
      { name: t("questions"), href: `/${locale}#faq` },
      { name: t("sponsors"), href: `/${locale}` },
    ] : []),
  ];

  return (
    <footer className="bg-vibora flex flex-col items-center justify-center py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <img
          src="/logo_02.svg"
          alt="Python Norte 2025"
          className="h-20 mb-12"
        />

        <nav className="flex flex-col items-center space-y-4">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              asChild
              className="bg-jiboia  text-tacaca hover:bg-tacaca hover:text-jiboia transition-colors text-md font-medium px-12 py-3 rounded-lg w-64"
            >
              <a href={item.href}>{item.name}</a>
            </Button>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;