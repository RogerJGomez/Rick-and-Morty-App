import React, { useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { useQuery, gql } from '@apollo/client'
import BadFetch from '../utils/BadFetch'
import Progress from '../utils/Progress'
import Grid from '@material-ui/core/Grid'
import Contain from '../styles/Contain'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Blur from '../styles/Blur'
import Title from '../styles/Title'
import Banner from '../styles/Banner'
import Grow from '@material-ui/core/Grow'
import PagWrapper from '../styles/PagWrapper'

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
  padding: 3%;
`
const BannerChars = styled(Banner)`
  background-image: url('/banner-characters.jpg');
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
        <BannerChars>
          <Blur />
          <Title variant="h2" gutterBottom>
            Characters
          </Title>
        </BannerChars>
        <Progress />
      </>
    )
  if (error) return <BadFetch />

  const charactersData = data.characters.results

  return (
    <>
      <BannerChars>
        <Blur />
        <Title variant="h2" gutterBottom>
          Characters
        </Title>
      </BannerChars>

      <Contain>
        <PagWrapper>
          <Pagination
            style={{ justifyContent: 'center' }}
            count={30}
            page={page}
            onChange={handleChange}
          />
        </PagWrapper>
        <Grow in={true}>
          <Grid container spacing={4}>
            {charactersData.map(character => (
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
        <PagWrapper>
          <Pagination
            style={{ justifyContent: 'center' }}
            count={30}
            page={page}
            onChange={handleChange}
          />
        </PagWrapper>
      </Contain>
    </>
  )
}
