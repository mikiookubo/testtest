module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '599px' },
      // => @media (max-width: 639px) { ... }
      tb: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
