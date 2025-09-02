const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["IBM Plex Sans Thai", ...fontFamily.sans],
        sans: ["IBM Plex Sans Thai Looped", ...fontFamily.sans],
      },
      colors: {
        "op-oxford-blue": "#4494F8", //HTML bg; fixed
        "ict-turquoise": "#4B9D4D", //button and below types card; fixed
        "ict-magenta-process": "#000000",
        "dst-prussian-blue": "#AB804D", //types bg
        "dst-sunglow": "#526935", //policy card inner color
      },
      backgroundImage: {
        "base-overlay": "url('/static/images/bg/bg-base-overlay.png')",
        "planet-moon": "url('/static/images/bg/planet-moon.png')",
        // 'type-button-overlay-primary':
        //   "url('/static/images/types/type-button-overlay.svg')",
        // 'type-button-overlay-secondary':
        //   "url('/static/images/types/type-button-overlay-secondary.svg')",
        "base-desktop": "url(/static/images/background/landing-desktop.png)",
        "landing-desktop": "url(/static/images/background/landing-desktop.png)",
        "stardust-desktop":
          "url(/static/images/background/landing-desktop.png)",
        "base-mobile": "url(/static/images/background/landing-mobile.png)",
        "landing-mobile": "url(/static/images/background/landing-mobile.png)",
        "stardust-mobile": "url(/static/images/background/landing-mobile.png)",
        "space-desktop": "url(/static/images/background/landing-desktop.png)",
      },
      backgroundSize: {
        "size-half": "50%",
        "size-full": "100%",
        "size-double": "200%",
        "size-triple": "300%",
      },
    },
  },
  plugins: [],
};

module.exports = config;
