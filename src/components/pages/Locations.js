import React from 'react'
import { useQuery, gql } from '@apollo/client'
import BadFetch from '../utils/BadFetch'
import Progress from '../utils/Progress'
import Grid from '@material-ui/core/Grid'
import Contain from '../styles/Contain'
import styled from 'styled-components'
import Blur from '../styles/Blur'
import Title from '../styles/Title'
import Banner from '../styles/Banner'

const LOCATIONS = gql`
  query GetLocations {
    locations {
      results {
        id
        name
        dimension
        type
        created
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

export default function Characters() {
  const { loading, error, data } = useQuery(LOCATIONS)

  if (loading) return <Progress />
  if (error) return <BadFetch />

  return (
    <>
      <BannerChars>
        <Blur />
        <Title variant="h2" gutterBottom>
          Locations
        </Title>
      </BannerChars>

      <Contain>
        <Grid container spacing={4}>
          {data.locations.results.map(location => (
            <Grid
              key={location.id}
              item
              xs={12}
              md={6}
              style={{ textAlign: 'center' }}
            >
              <Wrapper container>
                <InfoWrapper item xs={12}>
                  <p>
                    {location.id}: {location.name}
                  </p>
                  <p>{location.dimension}</p>
                  <p>{location.type}</p>
                  <p>{location.created}</p>
                </InfoWrapper>
              </Wrapper>
            </Grid>
          ))}
        </Grid>
      </Contain>
    </>
  )
}
