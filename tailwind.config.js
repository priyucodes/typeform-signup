/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        bg: "#191919",
      },
      fontFamily: {
        apercu: ["Apercu Pro", "sans-serif"],
      },
    },
    screens: {
      xs: "320px",
      bsm: "600px",
      sm: "640px",
      md: "720px",
      lg: "1024px",
      xl: "1280px",
      xl3: "1920px",
    },
  },

  plugins: [],
};
