/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        major: "url('/public/img/majors_bg.jpg')",
      },
      flexBasis: {
        "1/19": "5.2631578%",
        "5/19": "26.3157894%",
        "5/7": "71.428571%",
        "2/7": "28.571429",
      },
    },
  },
  plugins: [],
});
