import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { name: "Home", href: "/" },
    ...(import.meta.env.MODE !== "production" ? [
      { name: "Programação", href: "#calendario" },
    ] : []),
    { name: "Código de Conduta", href: "/code-of-conduct" },
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
                className="text-[rgb(127,104,97)] hover:text-[rgb(68,72,23)] transition-colors"
              >
                {item.name}
              </a>
            ))}
            {import.meta.env.MODE !== "production" && (
              <Button className="bg-theme-warning hover:bg-theme-warning/90 text-white">
                Inscreva-se
              </Button>
            )}

            {import.meta.env.MODE !== "production" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[rgb(127,104,97)] hover:text-[rgb(68,72,23)]"
                  >
                    <Languages className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => toggleLanguage()}>
                    <span className="mr-2">🇧🇷</span> Português
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toggleLanguage()}>
                    <span className="mr-2">🇺🇸</span> English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Menu */}
          {import.meta.env.MODE !== "production" && (
            <div className="md:hidden flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[rgb(127,104,97)] hover:text-[rgb(68,72,23)]"
                  >
                    <Languages className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => toggleLanguage()}>
                    <span className="mr-2">🇧🇷</span> Português
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toggleLanguage()}>
                    <span className="mr-2">🇺🇸</span> English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[rgb(127,104,97)] hover:text-[rgb(68,72,23)] transition-colors"
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
                  className="block px-3 py-2 text-[rgb(127,104,97)] hover:text-[rgb(68,72,23)] transition-colors"
                >
                  {item.name}
                </a>
              ))}

              {import.meta.env.MODE !== "production" && (
                <Button className="w-full bg-theme-warning hover:bg-theme-warning/90 text-white mt-4">
                  Inscreva-se
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