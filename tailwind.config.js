/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        css: [
          {
            maxWidth: '100%',
          }
        ]
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
