/** @type {import('tailwindcss').Config} */
export default {
  theme : {
    extend : {
      backgroundImage : {
        'black-bright-red-gradient': 'linear-gradient(90deg, #000000, #ff3b30)',  
      } ,
    } ,
  } ,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}