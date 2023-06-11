/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        major: "url('/public/img/majors_bg.jpg')",
        majorWell: "url('/public/img/major-well.png')",
        frame: "url('/public/img/action_frame.png')",
        woodRoom: "url('/src/assets/images/wood_room.jpg')",
        soilRoom: "url('/src/assets/images/soil_room.jpg')",
        stoneRoom: "url('/src/assets/images/stone_room.jpg')",
        empty: "url('/src/assets/images/empty.png')",
        field: "url('/src/assets/images/field.jpg')",
        majorCard: 'url(/public/img/majors_icon.png)',
      },
      width: {
        '1/10': '10%',
      },
      flexBasis: {
        '1/19': '5.2631578%',
        '5/19': '26.3157894%',
        '5/7': '71.428571%',
        '2/7': '28.571429%',
        '1/7': '14.28571428%',
        '1/28': '3.57142%',
        '8/28': '28.571428%',
        '1/31': '3.225806%',
        '9/31': '29.032258%',
      },
      aspectRatio: {
        '5/1': '5 / 1',
        '15/2': '15 / 2',
        '9/1': '9 / 1',
      },
      backgroundColor: {
        fence: 'rgb(120 53 15)',
        fenceRed: 'rgb(191 16 15)',
        fenceBlue: 'rgb(64 210 208)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
});
