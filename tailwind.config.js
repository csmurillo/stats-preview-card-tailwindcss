module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        cardMin:'380px'
      },
      maxHeight:{
        cardMax:'380px'
      },
      height: {
        cardHeight: '380px',
      }
    },
    colors:{
      veryDarkBlue:'hsl(233, 47%, 7%)',
      darkDesaturatedBlue:'hsl(244, 38%, 16%)',
      softViolet:'hsl(277, 64%, 61%)',
      backgroundImageViolet:'hsl(277, 100%, 30%)',
      white:'rgb(255,255,255)',
      statHeadingWhite:'hsla(0, 0%, 100%, 0.75)',
      mainParagraphWhite:'hsla(0, 0%, 100%, 0.6)'
    },
    fontFamily:{
      inter:['Inter', 'sans-serif'],
      lexendDeca: ['"Lexend Deca"', 'sans-serif']
    }
  },
  plugins: [],
}
