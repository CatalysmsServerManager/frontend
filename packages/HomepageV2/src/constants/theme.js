// shared colors

const main = '#28B766'
const shade = '#EAF8F0'
const text = '#8d96A7'
const title = '3A46763'

const lightTheme = {
  main,
  shade,
  text,
  title
}
const darkTheme = {
  main,
  shade,
  text,
  title
}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme)
export default theme
