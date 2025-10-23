/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      colors: {
        primary: "#2b6150",
        secondary: "#4EB192",
        warning: "#f054b0",
        white: "#ffffff",
        black: "#000000",

        transparent: "transparent",
        current: "currentColor",
      },
    },
    plugins: [],
  },
};
