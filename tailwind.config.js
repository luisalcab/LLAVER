module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    screens:{
      'mw': '1110px',
      'tighterT': {'min' : '967px', 'max' : '1110px'},
      'xtraSm' : {'min' : '1px', 'max' : '750px'},
      'fullLogoSmall' : {'min' : '1px', 'max': '464px'}
    },
    letterSpacing:{
      rtLogo: '.2em',
      widest: '.3em',
      wide_putin: '.5em'
    },
    extend: {
      fontFamily:{
        'josefin': 'Josefin Sans, sans-serif'
      }
    },
  },
  plugins: [],
}
