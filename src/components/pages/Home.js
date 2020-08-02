import React from 'react'
import { useQuery, gql } from '@apollo/client'
import BadFetch from '../utils/BadFetch'
import Progress from '../utils/Progress'
import Grid from '@material-ui/core/Grid'
import Contain from '../styles/Contain'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

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
const CharacterImg = styled.img`
  height: 100%;
  width: 100%;
`
const Wrapper = styled(Grid)`
  border-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: rgb(60, 62, 68);
  min-height: 150px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  overflow: hidden;
`
const InfoWrapper = styled(Grid)`
  text-align: left;
  padding: 5%;
`
const Banner = styled.div`
  background-image: url('/banner-3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative;
  @media (max-width: 768px) {
    height: 300px !important;
  }
`
const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
`
const Title = styled(Typography)`
  text-align: center;
  position: relative;
`
export default function Characters() {
  const { loading, error, data } = useQuery(CHARACTERS)

  if (loading) return <Progress />
  if (error) return <BadFetch />

  return (
    <>
      <Banner>
        <Blur />
        <Title variant="h2" gutterBottom>
          Welcome
        </Title>
      </Banner>

      <Contain>
        <Grid container spacing={4}>
          {data.characters.results.map(character => (
            <Grid
              key={character.id}
              item
              xs={12}
              md={6}
              style={{ textAlign: 'center' }}
            >
              <Wrapper container>
                <Grid item xs={4}>
                  <CharacterImg src={character.image} alt="character" />
                </Grid>
                <InfoWrapper item xs={8}>
                  <p>
                    {character.id}: {character.name}
                  </p>
                </InfoWrapper>
              </Wrapper>
            </Grid>
          ))}
        </Grid>
      </Contain>
    </>
  )
}
