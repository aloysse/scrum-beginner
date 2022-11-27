/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".25em",
    },
    extend: {
      backgroundImage: {
        main: "url('assets/img/bg.svg')",
        secondary: "url('assets/img/bg2.svg')",
        btn: "url('assets/img/btn-bg.svg')",
        cardBack: "url('assets/img/card-back.svg')",
        cardContent: "url('assets/img/card-content.svg')",
        placeBg: "url('assets/img/place-bg.svg')",
        placeAllBg: "url('assets/img/place-all-bg.svg')",
        alertBg: "url('assets/img/alert-bg.svg')",
        cardStar: "url('assets/img/card-star.svg')",
        flow: "url('assets/img/flow.svg')",
      },
      colors: {
        P1: "#D7B676",
        P2: "#DBC087",
        P3: "#00022B",
        barContainer: "rgba(215, 182, 118, 0.3);",
        blackTrans: "rgba(1,1,1,0.5)",
      },
    },
  },
  plugins: [],
};
