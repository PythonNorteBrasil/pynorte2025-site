import { create } from "zustand";

type LanguageStore = {
  language: "pt-BR" | "en-US";
  toggleLanguage: () => void;
};

export const useLanguage = create<LanguageStore>((set) => ({
  language: "pt-BR",
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "pt-BR" ? "en-US" : "pt-BR",
    })),
}));