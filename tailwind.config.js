module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#7393a7',
      secondary: '#fff',
      twitter: '#1da1f2'
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#fff',
      secondary: '#7393a7',
      twitter: '#fff'
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#7393a7',
      secondary: '#7393a7',
      twitter: '#1da1f2'
    })
  },
  variants: {
    margin: ['last']
  }
}
