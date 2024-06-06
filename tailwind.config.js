/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
    },
    extend: {
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
