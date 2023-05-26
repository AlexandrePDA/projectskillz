/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'abril' : ['"Abril Fatface"','arial'],
        'roboto' : ['"Roboto"','arial']
      },
      colors: {
        'dark-purple' : '#2A1B3B',
        'maroon' : '#553D67',
        'pink' : '#F64C72',
        'grey' : '#99738E',
        'semi-dark-blue' : '#2F2FA2',
      }
    },
  },
  plugins: [],
}

