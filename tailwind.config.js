/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      openSans: ["OpenSans"],
      openSansIt: ["OpenSansItalic"],
      recoleta: ["RecoletaAlt"],
      recoletaMd: ["RecoletaAltMedium"],
      recoletaBl: ["RecoletaAltBold"],
      caveat: ["Caveat"],
    },
    colors: {
      background: "#F4F1E8",
      upMaroon: "#7B1113",
      upGreen: "#014421",
      white: "#FFFFFF",
      gray: "#808080",
      black: "#000000"
    },
  },
  plugins: [],
};

