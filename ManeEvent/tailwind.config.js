/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      colors: {
        primary: "#2b6150",
        white: "#ffffff",
        black: "#000000",
        transparent: "transparent",
        current: "currentColor",
      },
    },
    plugins: [],
  },
};
