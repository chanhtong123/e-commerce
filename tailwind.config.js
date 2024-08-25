module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#0d0d0d",
          "900_01": "#030406",
          "900_0c": "#0000000c",
          "900_4c": "#0000004c",
          "900_71": "#00000071",
        },
        button1: { 0: "#00ff66", 1: "#00ff6699" },
        indigo: { 200: "#a0bce0" },
        bg: "#ffffff",
        blue_gray: { 100: "#cbe4e8", 900: "#2f2e30", "100_4c": "#d9d9d94c", "100_e5": "#d9d9d9e5" },
        button: "#000000",
        deep_orange: { a700: "#fa1214" },
        orange: { a200: "#ffad33" },
        red: { 300: "#e07575" },
        secondary: "#f5f5f5",
        secondary_2: "#db4444",
        teal: { 900: "#184947" },
        text2: { 0: "#0000007f", 1: "#00000066" },
        text: { 0: "#f9f9f9", 1: "#f9f9f966", 2: "#f9f9f9b2" },
        white: { a700_7f: "#ffffff7f" },
        yellow: { 400: "#eeff61" },
      },
      boxShadow: { xs: "0 1px 13px 0 #0000000c" },
      fontFamily: { inter: "Inter", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};


