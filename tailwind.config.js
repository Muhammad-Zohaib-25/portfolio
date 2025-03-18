/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        dangrek: ["Dangrek", "sans-serif"],
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // Move only half, so second set takes over
        },
      },
      screens: {
        mdlg: "1120px", // Custom extra small breakpoint
      },
    },
  },
  plugins: [],
};
