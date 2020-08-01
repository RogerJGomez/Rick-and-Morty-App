import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`

function ExchangeRates() {
  const { loading, error, data } = useQuery(CHARACTERS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.characters.results.map(character => (
    <div key={character.id}>
      <p>
        {character.id}: {character.name}
      </p>
    </div>
  ))
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  )
}

export default App
