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
import Wrapper from '../styles/Wrapper'
import BannerWrapper from '../styles/BannerWrapper'
import PagWrapper from '../styles/PagWrapper'
import Grow from '@material-ui/core/Grow'

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
        <BannerWrapper>
          <BannerChars>
            <Blur />
            <Title variant="h2" gutterBottom>
              Episodes
            </Title>
          </BannerChars>
        </BannerWrapper>
        <Progress />
      </>
    )
  if (error) return <BadFetch />

  const episodesData = data.episodes.results

  return (
    <>
      <BannerWrapper>
        <BannerChars>
          <Blur />
          <Title variant="h2" gutterBottom>
            Episodes
          </Title>
        </BannerChars>
      </BannerWrapper>
      <Contain>
        <PagWrapper>
          <Pagination
            style={{ justifyContent: 'center' }}
            count={2}
            page={page}
            onChange={handleChange}
          />
        </PagWrapper>
        <Grow in={true}>
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
        </Grow>
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
