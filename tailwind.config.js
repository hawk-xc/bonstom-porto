import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan path ini sesuai dengan struktur proyek Anda
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
      },
      animation: {
        "gradient-move": "gradient 20s ease infinite",
      },
      backgroundImage: {
        "custom-gradient":
          // "linear-gradient(135deg, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1)",
          "linear-gradient(135deg, #1ad7c0, #9b59b6, #ff7f7f)",
      },
    },
  },
  plugins: [require("daisyui")],
};
