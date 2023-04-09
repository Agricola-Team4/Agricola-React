/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        example: "url('/public/img/example.jpg')",
      }),
    },
  },
  plugins: [],
};
