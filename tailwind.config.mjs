/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        display: [
          "52px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.5px",
            fontWeight: "900",
          },
        ],
        "display-sm": [
          "44px",
          {
            lineHeight: "48px",
            letterSpacing: "-0.5px",
            fontWeight: "900",
          },
        ],
        "display-subheading": [
          "28px",
          {
            fontFamily: ["Roboto", "sans-serif"],
            lineHeight: "36px",
            letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        "display-subheading-sm": [
          "24px",
          {
            fontFamily: ["Roboto", "sans-serif"],
            lineHeight: "32px",
            letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        h1: [
          "44px",
          {
            lineHeight: "48px",
            fontWeight: "600",
          },
        ],
        h2: [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: "600",
          },
        ],
        subtitle: [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        button: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.25px",
            fontWeight: "600",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        small: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF6C40",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#2B2D42",
          foreground: "#FFFFFF",
          tints: [
            "#2b2d42",
            "#3d3f53",
            "#505265",
            "#646676",
            "#787a89",
            "#8d8f9c",
            "#a3a4af",
            "#b9bac2",
            "#d0d1d6",
            "#e7e8ea",
          ],
          shades: [
            "#2b2d42",
            "#242638",
            "#1d1f2f",
            "#161825",
            "#10111c",
            "#0a0b14",
            "#05060b",
            "#020205",
            "#010101",
            "#000000",
          ],
        },
        destructive: {
          DEFAULT: "#FF5E5E",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F0F0F0",
          foreground: "#67748C",
        },
        accent: {
          DEFAULT: "#D4C1F7",
          foreground: "#2B2D42",
        },
        slate: {
          DEFAULT: "#6967EF",
          tints: [
            "#6967ef",
            "#7578f2",
            "#8388f5",
            "#9098f8",
            "#9fa7fa",
            "#aeb6fc",
            "#bdc4fd",
            "#cdd3fe",
            "#dee2ff",
            "#eef0ff",
          ],
          shades: [
            "#6967ef",
            "#5a59d0",
            "#4c4bb1",
            "#3e3d94",
            "#313078",
            "#24235c",
            "#181742",
            "#0c0c2a",
            "#040414",
            "#000003",
          ],
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#2B2D42",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2B2D42",
        },
        cream: "#FDF4E4",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
