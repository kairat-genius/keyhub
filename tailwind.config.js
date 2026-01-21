// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(0.7 0.15 150)', // новый цвет вместо violet/indigo
      },
      backgroundImage: {
        'linear-to-r': 'linear-gradient(to right, theme("colors.primary"), theme("colors.primary"))',
        'linear-to-br': 'linear-gradient(to bottom right, theme("colors.primary"), #fff, theme("colors.primary"))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
