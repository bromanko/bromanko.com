module.exports = {
  theme: {
    fontFamily: {
      mono: ['Fantasque Sans Mono', 'monospace'],
    },
    extend: {
      colors: {
        red: '#bf616a',
        orange: '#d08770',
        // http://mcg.mbitson.com/#!?mcgpalette0=%23ebcb8b
        yellow: {
          default: '#ebcb8b',
          '50': '#fdf9f1',
          '100': '#f9efdc',
          '200': '#f5e5c5',
          '300': '#f1dbae',
          '400': '#eed39c',
          '500': '#ebcb8b',
          '600': '#e9c683',
          '700': '#e5be78',
          '800': '#e2b86e',
          '900': '#ddac5b',
        },
        green: '#a3be8c',
        blue: '#88c0d0',
        purple: '#b48ead',
        black: '#000',
        gray: {
          '700': '#2e3440',
          '600': '#3b4252',
          '500': '#434c5e',
          '400': '#434c5e',
          '300': '#c8caca',
          '200': '#d8dee9',
          '100': '#eceff4',
        },
      },
      borderWidth: {
        '6': '6px',
      },
    },
  },
}
