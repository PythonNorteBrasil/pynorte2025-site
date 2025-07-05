"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Languages } from "lucide-react";
import Link from "next/link";
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


const SECTION_IDS = [
  "home",
  "about-the-event",
  "local",
  "schedule",
  "programacao",
  "sponsors",
  "patrocinadores"
] as const;

const INTERSECTION_OPTIONS = {
  threshold: [0.1, 0.3, 0.5, 0.7],
  rootMargin: "-100px 0px -100px 0px",
};

const SCROLL_DEBOUNCE_DELAY = 150;
const INIT_DELAY = 100;
const SECTION_CHECK_DELAY = 200;

type SectionId = typeof SECTION_IDS[number];

const useActiveSection = (pathname: string, locale: string) => {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;
    let observer: IntersectionObserver;

    const initializeObserver = () => {
      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          if (pathname !== `/${locale}`) return;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              clearTimeout(debounceTimer);

              debounceTimer = setTimeout(() => {
                setActiveSection(entry.target.id as SectionId);
              }, SCROLL_DEBOUNCE_DELAY);
            }
          });
        },
        INTERSECTION_OPTIONS
      );

      SECTION_IDS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    };

    const findActiveSection = (): SectionId => {
      const hash = window.location.hash.replace('#', '') as SectionId;
      if (hash && SECTION_IDS.includes(hash)) {
        return hash;
      }

      if (pathname === `/${locale}`) {
        for (const sectionId of SECTION_IDS) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom > 150) {
              return sectionId;
            }
          }
        }
      }

      return "home";
    };

    const initTimer = setTimeout(() => {
      initializeObserver();
      setActiveSection(findActiveSection());
    }, INIT_DELAY);

    return () => {
      clearTimeout(debounceTimer);
      clearTimeout(initTimer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname, locale]);

  useEffect(() => {
    if (pathname === `/${locale}`) {
      setTimeout(() => {
        const foundSection = findActiveSection();
        setActiveSection(foundSection);
      }, SECTION_CHECK_DELAY);
    }
  }, [pathname, locale]);

  const findActiveSection = (): SectionId => {
    const hash = window.location.hash.replace('#', '') as SectionId;
    if (hash && SECTION_IDS.includes(hash)) {
      return hash;
    }

    if (pathname === `/${locale}`) {
      for (const sectionId of SECTION_IDS) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            return sectionId;
          }
        }
      }
    }

    return "home";
  };

  return activeSection;
};

interface NavItem {
  name: string;
  href?: string;
  scroll?: boolean;
  id?: SectionId;
}

const Navbar = () => {
  const t = useScopedI18n("component.menu");
  const locale = useCurrentLocale();
  const [isOpen, setIsOpen] = useState(false);
  const changeLocale = useChangeLocale();
  const router = useRouter();
  const pathname = usePathname();

  const activeSection = useActiveSection(pathname, locale);

  const navItems: NavItem[] = [
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
          id: "schedule" as SectionId,
        },
      ]
      : []),
    {
      name: t("sponsors"),
      href: `/${locale}/#sponsors`,
      scroll: true,
      id: "sponsors",
    },
    {
      name: t("codeOfConduct"),
      href: `/${locale}/code-of-conduct`
    },
  ];

  const isPageActive = (href: string): boolean => {
    if (href?.includes("#")) return false;
    return pathname === href || pathname === href?.replace(`/${locale}`, "");
  };

  const isSectionActive = (sectionId?: SectionId): boolean => {
    if (pathname.includes("/code-of-conduct") || pathname !== `/${locale}`) {
      return false;
    }
    return sectionId ? activeSection === sectionId : false;
  };

  const scrollToSection = (id: SectionId) => {
    if (pathname !== `/${locale}`) {
      router.push(`/${locale}/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      router.push(`/${locale}/#${id}`);
    }
  };

  const getNavItemClasses = (item: NavItem): string => {
    const baseClasses = "transition-colors text-sm font-medium";
    const isActive = item.scroll
      ? isSectionActive(item.id)
      : isPageActive(item.href!);

    return isActive
      ? `${baseClasses} text-white bg-blue-600 px-3 py-2 rounded-md`
      : `${baseClasses} text-tacaca hover:text-white`;
  };

  const getMobileNavItemClasses = (item: NavItem): string => {
    const baseClasses = "block w-full text-left px-3 py-2 transition-colors text-lg font-medium rounded-md";
    const isActive = item.scroll
      ? isSectionActive(item.id)
      : isPageActive(item.href!);

    return isActive
      ? `${baseClasses} text-white bg-blue-600`
      : `${baseClasses} text-tacaca hover:text-white`;
  };

  const getMobilePageLinkClasses = (href: string): string => {
    const baseClasses = "block px-3 py-2 transition-colors text-lg font-medium rounded-md";
    return isPageActive(href)
      ? `${baseClasses} text-white bg-blue-600`
      : `${baseClasses} text-tacaca hover:text-white`;
  };

  const handleMenuItemClick = (item: NavItem) => {
    if (item.scroll && item.id) {
      scrollToSection(item.id);
    }
    setIsOpen(false);
  };

  const renderNavItem = (item: NavItem, isMobile = false) => {
    const classes = isMobile ? getMobileNavItemClasses(item) : getNavItemClasses(item);

    if (item.scroll && item.id) {
      return (
        <button
          key={item.name}
          onClick={() => handleMenuItemClick(item)}
          className={classes}
        >
          {item.name}
        </button>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={isMobile ? getMobilePageLinkClasses(item.href!) : classes}
        target={item.href?.startsWith("http") ? "_blank" : "_self"}
        rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {item.name}
      </a>
    );
  };

  const LanguageDropdown = ({ isMobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={
            isMobile
              ? "text-tacaca hover:text-white h-12 w-12"
              : "bg-jiboia border-2 border-tacaca text-tacaca hover:bg-tacaca hover:text-jiboia transition-colors text-md font-medium px-6 py-4 rounded-lg"
          }
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
  );

  const RegisterButton = ({ isMobile = false }) => (
    <Link href="https://www.even3.com.br/python-norte-2025/">
      <Button
        className={`bg-jiboia border-2 border-tacaca text-tacaca hover:bg-tacaca hover:text-jiboia transition-colors text-md font-medium px-6 py-4 rounded-lg ${isMobile ? "w-full my-3" : ""
          }`}
      >
        {t("register")}
      </Button>
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full bg-jiboia z-50">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
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
          <div className="hidden md:flex items-center justify-between flex-1 pl-12">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => renderNavItem(item))}
            </div>

            <div className="flex items-center space-x-8">
              <LanguageDropdown />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageDropdown isMobile />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-tacaca hover:text-white transition-colors h-12 w-12"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => renderNavItem(item, true))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
