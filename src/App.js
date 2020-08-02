import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { createGlobalStyle } from 'styled-components'

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
  }

  html {
      scroll-behavior: smooth;
  }

  .MuiPaper-root {
    background-color:transparent !important;
  }

`

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
