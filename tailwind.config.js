/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        major: "url('/public/img/majors_bg.jpg')",
        majorWell: "url('/public/img/major-well.png')",
      },
      flexBasis: {
        '1/19': '5.2631578%',
        '5/19': '26.3157894%',
      },
      aspectRatio: {
        '5/1': '5 / 1',
      },
    },
  },
  plugins: [],
};
