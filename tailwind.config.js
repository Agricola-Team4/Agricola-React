/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'major': "url('./public/img/majors_bg.jpg')",
      }
    },
  },
  plugins: [],
};
