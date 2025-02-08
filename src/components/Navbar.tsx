"use client"

import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useChangeLocale, useScopedI18n } from '@/locales/client'

const Navbar = () => {
  const t = useScopedI18n("component.menu");

  const [isOpen, setIsOpen] = useState(false);
  const changeLocale = useChangeLocale()

  const navItems = [
    { name: t("home"), href: "/" },
    ...(process.env.NODE_ENV === "development" ? [
      { name: t("calendar"), href: "/calendar" },
    ] : []),
    { name: t("codeOfConduct"), href: "/code-of-conduct" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-theme-background/95 backdrop-blur-sm z-50 border-b border-theme-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src="/logo_v1.png"
              alt="Python Norte 2025"
              className="h-12"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-jiboia hover:text-jambu transition-colors"
              >
                {item.name}
              </a>
            ))}
            {process.env.NODE_ENV === "development" && (
              <Button className="bg-theme-warning hover:bg-theme-warning/90 text-white">
                Inscreva-se
              </Button>
            )}

            {process.env.NODE_ENV === "development" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-jiboia hover:text-jambu"
                  >
                    <Languages className="h-5 w-5" />
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
            )}
          </div>

          {/* Mobile Menu */}
          {process.env.NODE_ENV === "development" && (
            <div className="md:hidden flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-jiboia hover:text-jambu"
                  >
                    <Languages className="h-5 w-5" />
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
                className="text-jiboia hover:text-jambu transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-jiboia hover:text-jambu transition-colors"
                >
                  {item.name}
                </a>
              ))}

              {process.env.NODE_ENV === "development" && (
                <Button className="w-full bg-theme-warning hover:bg-theme-warning/90 text-white mt-4">
                  {t("register")}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;