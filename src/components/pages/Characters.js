import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import BadFetch from '../utils/BadFetch'
import Progress from '../utils/Progress'
import Grid from '@material-ui/core/Grid'
import Contain from '../styles/Contain'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Grow from '@material-ui/core/Grow'
import InfoWrapper from '../styles/InfoWrapper'
import Wrapper from '../styles/Wrapper'
import Banner from '../BannerItem'
import Pagination from '../PaginationItem'

const CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        image
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`
const CharacterImg = styled.img`
  height: 100%;
  width: 100%;
`
export default function Characters() {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery(CHARACTERS, {
    variables: {
      page
    }
  })

  const handleChange = (event, value) => {
    setPage(value)
  }

  if (loading)
    return (
      <>
        <Banner title="Characters" url="/banner-characters.jpg" />
        <Progress />
      </>
    )
  if (error)
    return (
      <>
        <Banner title="Characters" url="/banner-characters.jpg" />
        <BadFetch />
      </>
    )

  const charactersData = data.characters.results

  return (
    <>
      <Banner title="Characters" url="/banner-characters.jpg" />
      <Contain>
        <Pagination page={page} count={30} setPage={handleChange} />
        <Grow in={true}>
          <Grid container spacing={4}>
            {charactersData.map(character => (
              <Grid key={character.id} item xs={12} md={6}>
                <Wrapper container>
                  <Grid item xs={4}>
                    <CharacterImg src={character.image} alt="character" />
                  </Grid>
                  <InfoWrapper padding={'2%'} text={'left'} item xs={8}>
                    <Typography variant="h5">{character.name}</Typography>
                    <br />
                    <Typography variant="body1">
                      Status: {character.status}
                    </Typography>
                    <Typography variant="body1">
                      First seen in: {character.episode[0].name}
                    </Typography>
                    <Typography variant="body1">
                      Last known location: {character.location.name}
                    </Typography>
                  </InfoWrapper>
                </Wrapper>
              </Grid>
            ))}
          </Grid>
        </Grow>
        <Pagination page={page} count={30} setPage={handleChange} />
      </Contain>
    </>
  )
}
