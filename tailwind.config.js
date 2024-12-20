/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    
  ],
  theme: {
    screens: {
      // Smartphones
      'xs': '320px',   // Extra small (smartphones très petits, iPhone SE, etc.)
      'sm': '480px',   // Small (smartphones moyens, iPhone 5/6/7, etc.)
      'md': '640px',   // Medium (smartphones plus grands, iPhone 8, Galaxy S9, etc.)
      
      // Tablettes
      'lg': '768px',   // Large (tablettes 7-8", iPad mini, Samsung Galaxy Tab, etc.)
      'xl': '1024px',  // Extra large (tablettes 10", iPad standard, etc.)

      // Ordinateurs portables et de bureau
      '2xl': '1280px', // Deux fois extra large (écrans d'ordinateurs portables, MacBook, etc.)
      '3xl': '1440px', // Trois fois extra large (écrans 15", ordinateurs portables puissants)
      
      // Grands écrans de bureau
      '4xl': '1600px', // Quatre fois extra large (moniteurs de bureau plus grands)
      '5xl': '1920px', // Cinq fois extra large (écrans Full HD, écrans de bureau haute résolution)

      // Ultra grands écrans
      '6xl': '2560px', // Six fois extra large (écrans WQHD, moniteurs ultra larges)
      '7xl': '3840px', // Sept fois extra large (écrans 4K, télévisions haute définition)
      '8xl': '5120px', // Huit fois extra large (écrans 5K, moniteurs ultra larges et télévisions)
    },
   fontSize: {
       t1: ["200px",
         {lineHeight: '220px'}],
       t2: ["170px",
         {lineHeight: '190px'}],
       t3: ["150px",
         {lineHeight: '1700px'}],
       d1: ["130px",
         {lineHeight: '150px'}],
       d2: ["110px",
         {lineHeight: '130px'}],
       d3: ["90px",
         {lineHeight: '110px'}],
       d4: ["80px",
         {lineHeight: '95px'}],
       d5: ["70px",
         {lineHeight: '85px'}],
       h1: ["60px",
          {lineHeight: '75px'}],
       h2: ["55px",
          {lineHeight: '62px'}],
       h3: ["48px",
          {lineHeight: '52px'}],
       h4: ["40px",
          {lineHeight: '45px'}],
       h5: ["30px",
          {lineHeight: '36px'}],
       b1: ["26px",
          {lineHeight: '34px'}],
       b2: ["24px",
          {lineHeight: '32px'}],
       b3: ["22px",
          {lineHeight: '28px'}],
       b4: ["20px",
          {lineHeight: '26px'}],
       b5: ["18px",
          {lineHeight: '24px'}],
       c1: ["16px",
          {lineHeight: '20px'}],
       c2: ["14px",
          {lineHeight: '18px'}],
       c3: ["12px",
          {lineHeight: '16px'}],
       c4: ["10px",
          {lineHeight: '14px'}],
       c5: ["8px",
          {lineHeight: '12px'}],
       },
   colors: {
       white: "#ffffff",
       gray: {
         50: "#fafafa",
         100: "#efefef",
         200: "#dfdfdf",
         300: "#d0d0d0",
         400: "#c0c0c0",
         500: "#b1b1b1",
         DEFAULT: "#a2a2a2",
         700: "#858585",
         800: "#696969",
         900: "#4e4e4e",
        },
        cyan: {
          100: "#bed6e4",
          200: "#9dc1d6",
          300: "#7baec9",
          400: "#559abb",
          DEFAULT: "#1d87ae",
          600: "#206f8f",
          700: "#205870",
          800: "#1d4254",
          900: "#182e38",
        },
        blue: {
          100: "#dde3ee",
          200: "#bcc7de",
          300: "#9aaccd",
          400: "#7892bd",
          500: "#5479ac",
          DEFAULT: "#26619c",
          700: "#245180",
          800: "#214165",
          900: "#1d314c",
        },
      },
   borderRadius: {
       'small': '5px',
       "medium": '8px',
       DEFAULT: '10px',
       "large": '15px',
       "xlarge": '40px',
       'full': '9999px',
     },
   extend: {},
   },
  plugins: [],
}
