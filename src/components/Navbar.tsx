"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useChangeLocale,
  useScopedI18n,
  useCurrentLocale,
} from "@/locales/client";
import Link from "next/link";

const Navbar = () => {
  const t = useScopedI18n("component.menu");
  const locale = useCurrentLocale();
  const [isOpen, setIsOpen] = useState(false);
  const changeLocale = useChangeLocale();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      router.push(`/${locale}/#${id}`);
    }
  };

  const navItems = [
    {
      name: t("description"),
      href: `/${locale}/#about-the-event`,
      scroll: true,
      id: "about-the-event",
    },
    {
      name: t("location"),
      href: `/${locale}/#local`,
      scroll: true,
      id: "local",
    },
    ...(process.env.NODE_ENV === "development"
      ? [
          {
            name: t("calendar"),
            href: `/${locale}/#schedule`,
            scroll: true,
            id: "schedule",
          },
        ]
      : []),
    {
      name: t("sponsors"),
      href: `/${locale}/#sponsors`,
      scroll: true,
      id: "sponsors",
    },
    { name: t("codeOfConduct"), href: `/${locale}/code-of-conduct` },
  ];

  return (
    <nav className="fixed top-0 w-full bg-jiboia z-50">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              aria-label="Go to Home"
            >
              <img
                src="/logo_02.svg"
                alt="Python Norte 2025"
                className="h-11"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between flex-1 pl-12 scroll-smooth">
            <div className="flex items-center space-x-12">
              {navItems.map((item) =>
                item.scroll ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-tacaca hover:text-white transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-tacaca hover:text-white transition-colors text-sm font-medium"
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>

            <div className="flex items-center space-x-8">
              <Link href="https://www.even3.com.br/python-norte-2025/">
                <Button className="bg-jiboia border-2 border-tacaca text-tacaca hover:bg-tacaca hover:text-jiboia transition-colors text-md font-medium px-6 py-4 rounded-lg">
                  {t("register")}
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-jiboia border-2 border-tacaca text-tacaca hover:bg-tacaca hover:text-jiboia transition-colors text-md font-medium px-6 py-4 rounded-lg"
                  >
                    <Languages className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => changeLocale("pt")}>
                    <span className="mr-2">🇧🇷</span> Português
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLocale("en")}>
                    <span className="mr-2">🇺🇸</span> English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-tacaca hover:text-white h-12 w-12"
                >
                  <Languages className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLocale("pt")}>
                  <span className="mr-2">🇧🇷</span> Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLocale("en")}>
                  <span className="mr-2">🇺🇸</span> English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-tacaca hover:text-white transition-colors h-12 w-12"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) =>
                item.scroll ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-tacaca hover:text-white transition-colors text-lg font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-tacaca hover:text-white transition-colors text-lg font-medium"
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                  >
                    {item.name}
                  </a>
                )
              )}

              <Link href="https://www.even3.com.br/python-norte-2025/">
                <Button className="w-full bg-jiboia border-2 border-tacaca text-tacaca hover:bg-tacaca hover:text-jiboia transition-colors text-md font-medium px-6 py-4 rounded-lg my-3">
                  {t("register")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
