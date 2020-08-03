import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#202329'
    },
    secondary: {
      main: '#fff'
    }
  },
  typography: {
    fontFamily: ['Fredoka One, cursive', 'Get Schwifty'],
    h1: {
      fontFamily: 'Get Schwifty'
    }
  }
})

export default theme
