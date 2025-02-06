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
        "acai": "#3b276b",    // Açaí 02
        "vibora": "#0ba2c6",  // Víbora 01
        "jambu": "#41501f", // Jambu 03
        "jiboia": "#7d1d1d", // Jiboia 06
        "camarao": "#f28e89", // Camarão 01
        "tacaca": "#f8f4b7",  // Tacacá 01
        "cabocla": "#d75941", // Cabocla 01

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
        'h1': ['48pt', {
          lineHeight: '18pt',
          fontWeight: '300', // Light
        }],
        'h2': ['48pt', {
          lineHeight: '18pt',
          fontWeight: '500', // Medium
        }],
        'h3': ['30pt', {
          lineHeight: '0pt',
          fontWeight: '300', // Light
        }],
        'h4': ['30pt', {
          lineHeight: '0pt',
          fontWeight: '500', // Medium
        }],
        'h5': ['21pt', {
          lineHeight: '0pt',
          fontWeight: '400', // Regular
        }],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;