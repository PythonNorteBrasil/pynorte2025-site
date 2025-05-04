import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Theme colors
        "theme-primary": "#3b276b", // Açaí 02
        "theme-secondary": "#D75941", // Cabocla 01
        "theme-accent": "#82a529", // Jambu 01
        "theme-warning": "#D75941", // Cabocla 01
        "theme-highlight": "#f28e89", // Camarão 01
        "theme-background": "#f8f4b7", // Tacacá 01

        // One color from each palette
        acai: "#3b276b", // Açaí 02
        vibora: "#057ca4", // Víbora 02
        "vibora-alternative": "#0a4d9d", // Víbora 04
        jambu: "#41501f", // Jambu 03
        "jambu-alternative": "#D5DC8C", // Jambu 01
        jiboia: "#7d1d1d", // Jiboia 06
        "jiboia-light": "#de3e2e", // Jiboia 02
        camarao: "#f28e89", // Camarão 01
        "camarao-light": "#ed6954", // Camarão 02
        "camarao-alternative": "#F6D5A9",
        tacaca: "#f8f4b7", // Tacacá 01
        "tacaca-alternative": "#f6a118",
        "tacaca-light": "#F6E9AE",
        "cabloca-light": "#B59DCB4D",
        cabocla: "#d75941", // Cabocla 01,
        "cabocla-alternative": "#351a1d", // Cabocla 07

        // shadcn/ui required colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        mono: ["DM Mono", "monospace"],
      },
      fontSize: {
        h1: [
          "48pt",
          {
            lineHeight: "18pt",
            fontWeight: "300", // Light
          },
        ],
        h2: [
          "48pt",
          {
            lineHeight: "18pt",
            fontWeight: "500", // Medium
          },
        ],
        h3: [
          "30pt",
          {
            lineHeight: "0pt",
            fontWeight: "300", // Light
          },
        ],
        h4: [
          "30pt",
          {
            lineHeight: "0pt",
            fontWeight: "500", // Medium
          },
        ],
        h5: [
          "21pt",
          {
            lineHeight: "0pt",
            fontWeight: "400", // Regular
          },
        ],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
