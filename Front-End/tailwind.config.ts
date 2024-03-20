import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    fontFamily: {
      body: ["Jost", "serif"],
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        themePrimary: "#8A84E2",
        themeSecond: "#87baab",
        themeLighterAlt: "#f7f8fa",
        themeLighter: "#B8B9BB",
        themeLight: "#6B7280",
        themeTertiary: "#8F9CA9",
        themeSecondary: "#a6b2cc",
        themeDarkAlt: "#66737F",
        themeDark: "#36414C",
        themeDarker: "#2d3748",
        themeDarkerAlt: "#1a202c",
        body: "#f2f5f8",
        black1: "#000",
        white: "#fff",

        prm: "#8e9cce",
        arsenic: "#36414C",
        black: "#13161C",
        gray: "#D5DDE5",
        deep: "#66737F",
        light: "#F2F5F8",
        grayLight: "#8F9CA9",
        greenLight: "#ffe9f3",
        greenLight2: "#f4bfdb",
        whiteLight: "#B8B9BB",
        yellowLight: "#FFF6E9",
      },
      fontSize: {
        xsss: "12px",
        xss: "13px",
        xss1: "14px",
        xs: "16px",
        xxs: "18px",
        lg2: "20px",
        lg: "24px",
        xl: "32px",
        xxl2: "40px",
        xxl: "45px",
        xxxl: "64px",
      },
    },
    variants: {
      extend: {
        display: ["group-hover"],
        visibility: ["group-hover"],
        transform: ["group-hover"],
        scale: ["group-hover"],
        witdh: ["group-hover"],
      },
    },
  },
  plugins: [],
};
export default config;
