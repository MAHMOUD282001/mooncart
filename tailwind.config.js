/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#24262b",
        "primary-gray": "#5e626f",
        "primary-green": "#0d775e",
        "red-gray": "#444444",
        "white-100": "#f3f3f3",
      },

      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
