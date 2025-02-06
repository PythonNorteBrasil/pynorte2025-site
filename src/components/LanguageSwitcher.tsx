import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="text-[rgb(127,104,97)] hover:text-[rgb(68,72,23)]"
      data-testid="language-switcher"
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
};

export default LanguageSwitcher;