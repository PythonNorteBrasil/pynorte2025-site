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
      className="text-jiboia hover:text-jambu"
      data-testid="language-switcher"
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
};

export default LanguageSwitcher;