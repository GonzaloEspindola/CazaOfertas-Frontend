module.exports = {
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#dbc29e',
          secondary: '#212121',
          background: '#EDEDED',
        },
      },
    ],
  },
}
