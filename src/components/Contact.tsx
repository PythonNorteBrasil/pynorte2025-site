import React from 'react';

import { Mail, X } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const Contact = () => {
  const socialLinks = [
    {
      icon: X,
      href: "https://twitter.com/pythonnortebr",
      label: "Twitter",
    },
    {
      icon: SiInstagram,
      href: "https://www.instagram.com/pythonnortebrasil/",
      label: "Instagram",
    },
    {
      icon: SiFacebook,
      href: "https://www.facebook.com/profile.php?id=61568143374581",
      label: "Facebook",
    },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/company/pynorte/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:pynorteam@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[rgb(68,72,23)] mb-12">
          Nossos contatos
        </h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[rgb(127,104,97)] hover:text-[rgb(68,72,23)] transition-colors"
              aria-label={link.label}
            >
              <link.icon size={32} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;