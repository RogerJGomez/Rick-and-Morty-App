import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Layout from './components/Layout'
import Prueba from './components/Characters'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Prueba />
      </Layout>
    </ApolloProvider>
  )
}

export default App
