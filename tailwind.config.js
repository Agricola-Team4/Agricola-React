/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'major': "url('/public/img/majors_bg.jpg')",
        'majorWell' : "url('/public/img/major-well.png')",
      }
    },
  },
  plugins: [],
};
