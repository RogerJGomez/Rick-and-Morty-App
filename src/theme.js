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
    fontFamily: 'Fredoka One, cursive'
  }
})

export default theme
