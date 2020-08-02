import React, { useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { useQuery, gql } from '@apollo/client'
import BadFetch from '../utils/BadFetch'
import Progress from '../utils/Progress'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Contain from '../styles/Contain'
import styled from 'styled-components'
import Blur from '../styles/Blur'
import Title from '../styles/Title'
import Banner from '../styles/Banner'
import PagWrapper from '../styles/PagWrapper'

const EPISODES = gql`
  query GetEpisodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
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
const BannerChars = styled(Banner)`
  background-image: url('/banner-episodes.jpg');
`

export default function Episodes() {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery(EPISODES, {
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
            Episodes
          </Title>
        </BannerChars>
        <Progress />
      </>
    )
  if (error) return <BadFetch />

  const episodesData = data.episodes.results

  return (
    <>
      <BannerChars>
        <Blur />
        <Title variant="h2" gutterBottom>
          Episodes
        </Title>
      </BannerChars>

      <Contain>
        <PagWrapper>
          <Pagination
            style={{ justifyContent: 'center' }}
            count={2}
            page={page}
            onChange={handleChange}
          />
        </PagWrapper>
        <Grid container spacing={4}>
          {episodesData.map(episode => (
            <Grid key={episode.id} item xs={12} md={6}>
              <Wrapper container>
                <InfoWrapper item xs={12} style={{ textAlign: 'center' }}>
                  <Typography variant="h5">{episode.name}</Typography>
                  <br />
                  <Typography variant="body1">
                    Episode: {episode.episode}
                  </Typography>
                  <Typography variant="body1">
                    Air date: {episode.air_date}
                  </Typography>
                </InfoWrapper>
              </Wrapper>
            </Grid>
          ))}
        </Grid>
        <PagWrapper>
          <Pagination
            style={{ justifyContent: 'center' }}
            count={2}
            page={page}
            onChange={handleChange}
          />
        </PagWrapper>
      </Contain>
    </>
  )
}
