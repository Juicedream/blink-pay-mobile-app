/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",     // all Expo Router screens
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: { extend: {
    colors: {
      'dark-blue': '#002A61',
      'electric-blue': '#3366FF',
      'muted-gray': '#E3E5E8',
      'success-green': '#2ECC71',
      'error-red': '#E74C3C',   
     },
     fontFamily: {
      robotoRegular: ['robotoRegular'],
      robotoSemiBold: ['robotoSemiBold'],
      robotoBold: ['robotoBold'],
      montserratRegular: ['montserratRegular'],
      montserratBold: ['montserratBold'],
      montserratSemiBold: ['montserratSemiBold'],
     }
  } },
  plugins: [],
};
