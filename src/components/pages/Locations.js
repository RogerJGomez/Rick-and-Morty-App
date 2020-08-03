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
const InfoWrapper = styled(Grid)`
  text-align: left;
  padding: 5%;
`
const BannerChars = styled(Banner)`
  background-image: url('/banner-locations.jpg');
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
        <BannerWrapper>
          <BannerChars>
            <Blur />
            <Title variant="h2" gutterBottom>
              Locations
            </Title>
          </BannerChars>
        </BannerWrapper>
        <Progress />
      </>
    )
  if (error) return <BadFetch />

  const locationsData = data.locations.results

  return (
    <>
      <BannerWrapper>
        <BannerChars>
          <Blur />
          <Title variant="h2" gutterBottom>
            Locations
          </Title>
        </BannerChars>
      </BannerWrapper>
      <Contain>
        <PagWrapper>
          <Pagination
            style={{ justifyContent: 'center' }}
            count={10}
            page={page}
            onChange={handleChange}
          />
        </PagWrapper>
        <Grow in={true}>
          <Grid container spacing={4}>
            {locationsData.map(location => (
              <Grid key={location.id} item xs={12} md={6}>
                <Wrapper container>
                  <InfoWrapper item xs={12} style={{ textAlign: 'center' }}>
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
        <PagWrapper>
          <Pagination
            style={{ justifyContent: 'center' }}
            count={10}
            page={page}
            onChange={handleChange}
          />
        </PagWrapper>
      </Contain>
    </>
  )
}
