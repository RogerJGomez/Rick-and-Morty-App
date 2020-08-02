import React from 'react'
import Grid from '@material-ui/core/Grid'
import Contain from '../styles/Contain'
import Typography from '@material-ui/core/Typography'
import Blur from '../styles/Blur'
import Title from '../styles/Title'
import Banner from '../styles/Banner'
import styled from 'styled-components'

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
const BannerHome = styled(Banner)`
  background-image: url('/banner-home.jpg');
`

export default function Characters() {
  return (
    <>
      <BannerHome>
        <Blur />
        <Title variant="h2" gutterBottom>
          Rick and Morty
        </Title>
      </BannerHome>

      <Contain>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Wrapper></Wrapper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Wrapper></Wrapper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Wrapper></Wrapper>
          </Grid>
        </Grid>
      </Contain>
    </>
  )
}
