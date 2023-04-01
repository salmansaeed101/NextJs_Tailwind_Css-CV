/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
       
    colors:{
      bodyColor:'#191919',
    },
    animation:{
      "spin-slow":"spin 15s linear infinite",
      "reverse-spin":"reverse-spin 15s linear infinite",

    },
    keyframes:{
      "reverse-spin":{
        from:{
          transform:"rotate(360deg)",

        },
      },
    },
    boxShadow:{
      greenShadow:"0px 0px 188px -14px rgba(237,255,32,1)",
      testShadow:"11px 0px 13px -15px rgba(0,0,0,1)",
    },
  },

  },
  
  
  
  plugins: [require("tailwind-scrollbar")],
}