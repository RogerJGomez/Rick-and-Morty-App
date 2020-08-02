import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Layout from './components/Layout'
import Prueba from './components/Characters'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Prueba />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
