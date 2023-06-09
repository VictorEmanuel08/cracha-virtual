/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBackground: "url('backgroundGETICOM.jpg')",
        "mais-gradient": "linear-gradient(90deg, #4263EB 0%, #4263EB00 100%)",
      },
      colors: {
        "dark-purple": "#4263EB",
        "light-white": "#748FFC",
        "dark-theme": "#EDF2FF",
        "white-write": "#dee2e6",
        "blue-write": "#4263EB",
        "black-rgba": "rgba(0, 0, 0, 0.54)",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
