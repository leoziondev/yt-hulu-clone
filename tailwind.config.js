module.exports = {
  mode: 'jit',
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
