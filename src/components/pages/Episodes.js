import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import Grid from '@material-ui/core/Grid'
import BadFetch from '../utils/BadFetch'
import Progress from '../utils/Progress'
import Typography from '@material-ui/core/Typography'
import Wrapper from '../styles/Wrapper'
import InfoWrapper from '../styles/InfoWrapper'
import Banner from '../BannerItem'
import Contain from '../styles/Contain'
import Grow from '@material-ui/core/Grow'
import Pagination from '../PaginationItem'

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
        <Banner title="Episodes" url="/banner-episodes.jpg" />
        <Progress />
      </>
    )
  if (error)
    return (
      <>
        <Banner title="Episodes" url="/banner-episodes.jpg" />
        <BadFetch />
      </>
    )

  const episodesData = data.episodes.results

  return (
    <>
      <Banner title="Episodes" url="/banner-episodes.jpg" />
      <Contain>
        <Pagination page={page} count={2} setPage={handleChange} />
        <Grow in={true}>
          <Grid container spacing={4}>
            {episodesData.map(episode => (
              <Grid key={episode.id} item xs={12} md={6}>
                <Wrapper container>
                  <InfoWrapper padding={'5%'} text={'center'} item xs={12}>
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
        <Pagination page={page} count={2} setPage={handleChange} />
      </Contain>
    </>
  )
}
