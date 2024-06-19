/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.gap-after': {
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            height: '10px',
            width: '100%',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

