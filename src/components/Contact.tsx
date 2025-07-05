"use client"

import React from 'react';
import { useScopedI18n } from '@/locales/client';
import { Button } from "./ui/button";
import Link from 'next/link';

const Contact = () => {
  const t = useScopedI18n("component.contact");

  const socialLinks = [
    {
      icon: "/social/Linkedin.svg",
      href: "https://www.linkedin.com/company/pynorte/",
      label: "LinkedIn",
    },
    {
      icon: "/social/Instagram.svg",
      href: "https://www.instagram.com/pythonnortebrasil/",
      label: "Instagram",
    },
    {
      icon: "/social/Facebook.svg",
      href: "https://www.facebook.com/profile.php?id=61568143374581",
      label: "Facebook",
    },
    {
      icon: "/social/Telegram.svg",
      href: "https://t.me/python_norte",
      label: "Telegram",
    },
    {
      icon: "/social/X.svg",
      href: "https://twitter.com/pythonnortebr",
      label: "X (Twitter)",
    },
  ];

  return (
    <>
      <img src="/background_bottom.png" alt="Background" className="w-full h-auto" />
      <section className="py-20 bg-vibora">

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-tacaca mb-16">
            Mídias Sociais
          </h2>
          <div className="flex justify-center items-center space-x-8 mb-16">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-transform hover:scale-110"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-12 h-12"
                />
              </a>
            ))}
          </div>
          <a href="https://www.even3.com.br/python-norte-2025/">
            <Button
              asChild
              size="lg"
              className="bg-jiboia text-tacaca hover:bg-tacaca hover:text-jiboia transition-colors text-md font-medium w-full max-w-2xl"
            >
              {t("buyTicket")}
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;