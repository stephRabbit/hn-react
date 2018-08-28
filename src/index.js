import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange'
import blue from '@material-ui/core/colors/blue'
// -------------------
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
// -------------------
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
const theme = createMuiTheme({
  palette: {
    primary: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700]
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    }
  }
})

const jsx = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
)
