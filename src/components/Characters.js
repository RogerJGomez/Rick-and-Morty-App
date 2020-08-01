import React from 'react'
import { useQuery, gql } from '@apollo/client'

const CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`
export default function Characters() {
  const { loading, error, data } = useQuery(CHARACTERS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      {data.characters.results.map(character => (
        <div key={character.id}>
          <p>
            {character.id}: {character.name}
          </p>
          <image src={character.image} alt />
        </div>
      ))}
    </>
  )
}
