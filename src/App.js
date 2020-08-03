import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core/styles'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import theme from './theme'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import Characters from './components/pages/Characters'
import Locations from './components/pages/Locations'
import Episodes from './components/pages/Episodes'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const GlobalStyles = createGlobalStyle`
  
  :root {
      font-size: 16px;
  }

  body {
    background:rgb(32, 35, 41) !important;
    font-family: 'Fredoka One', cursive !important;
    overflow-x: hidden;
  }

  html {
      scroll-behavior: smooth;
  }

  .MuiPagination-ul {
    justify-content:center !important;
  }

`

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Layout />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/characters" component={Characters} />
            <Route path="/locations" component={Locations} />
            <Route path="/episodes" component={Episodes} />
          </Switch>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  )
}

export default App
