import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import BadFetch from '../utils/BadFetch'
import Progress from '../utils/Progress'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Contain from '../styles/Contain'
import Wrapper from '../styles/Wrapper'
import InfoWrapper from '../styles/InfoWrapper'
import Banner from '../BannerItem'
import Grow from '@material-ui/core/Grow'
import Pagination from '../PaginationItem'

const LOCATIONS = gql`
  query GetLocations($page: Int) {
    locations(page: $page) {
      results {
        id
        name
        dimension
        type
      }
    }
  }
`

export default function Locations() {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery(LOCATIONS, {
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
        <Banner title="Locations" url="/banner-locations.jpg" />
        <Progress />
        <Contain>
          <Pagination page={page} count={5} setPage={handleChange} />
        </Contain>
      </>
    )
  if (error)
    return (
      <>
        <Banner title="Locations" url="/banner-locations.jpg" />
        <BadFetch />
      </>
    )

  const locationsData = data.locations.results

  return (
    <>
      <Banner title="Locations" url="/banner-locations.jpg" />
      <Contain>
        <Pagination page={page} count={5} setPage={handleChange} />
        <Grow in={true}>
          <Grid container spacing={4}>
            {locationsData.map(location => (
              <Grid key={location.id} item xs={12} md={6}>
                <Wrapper container>
                  <InfoWrapper padding={'5%'} text={'center'} item xs={12}>
                    <Typography variant="h5">{location.name}</Typography>
                    <br />
                    <Typography variant="body1">
                      Location: {location.dimension}
                    </Typography>
                    <Typography variant="body1">
                      Type: {location.type}
                    </Typography>
                  </InfoWrapper>
                </Wrapper>
              </Grid>
            ))}
          </Grid>
        </Grow>
        <Pagination page={page} count={5} setPage={handleChange} />
      </Contain>
    </>
  )
}
