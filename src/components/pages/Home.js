import React from 'react'
import Grid from '@material-ui/core/Grid'
import Contain from '../styles/Contain'
import Blur from '../styles/Blur'
import Title from '../styles/Title'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Banner from '../styles/Banner'
import Grow from '@material-ui/core/Grow'
import styled from 'styled-components'

const OptionImg = styled.img`
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
const Links = styled(RouterLink)`
  text-decoration: none;
  color: white;
  text-align: center;
`
const Subtitles = styled(Typography)`
  padding: 5% 0;
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
        <Grow in={true}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Links to="/characters">
                <Wrapper>
                  <OptionImg src="/option-1.jpg" alt="option" />
                  <Subtitles variant="h4">Characters</Subtitles>
                </Wrapper>
              </Links>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Links to="/locations">
                <Wrapper>
                  <OptionImg src="/option-2.jpg" alt="option" />
                  <Subtitles variant="h4">Locations</Subtitles>
                </Wrapper>
              </Links>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Links to="/episodes">
                <Wrapper>
                  <OptionImg src="/option-3.jpg" alt="option" />
                  <Subtitles variant="h4">Episodes</Subtitles>
                </Wrapper>
              </Links>
            </Grid>
          </Grid>
        </Grow>
      </Contain>
    </>
  )
}
