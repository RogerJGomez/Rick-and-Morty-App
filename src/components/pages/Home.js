import React from 'react'
import Grid from '@material-ui/core/Grid'
import Contain from '../styles/Contain'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Banner from '../BannerItem'
import Grow from '@material-ui/core/Grow'
import Wrapper from '../styles/Wrapper'
import styled from 'styled-components'

const OptionImg = styled.img`
  width: 100%;
  height: 60vh;
`
const Links = styled(RouterLink)`
  text-decoration: none;
  color: white;
  text-align: center;
`
const Subtitles = styled(Typography)`
  padding: 3% 0;
`
const OptionsWrapper = styled(Wrapper)`
  height: 70vh;
`
export default function Characters() {
  return (
    <>
      <Banner title="Rick and Morty" url="/banner-home.jpg" />
      <Contain>
        <Grow in={true}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Links to="/characters">
                <OptionsWrapper>
                  <OptionImg src="/option-1.jpg" alt="option" />
                  <Subtitles variant="h4">Characters</Subtitles>
                </OptionsWrapper>
              </Links>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Links to="/locations">
                <OptionsWrapper>
                  <OptionImg src="/option-2.jpg" alt="option" />
                  <Subtitles variant="h4">Locations</Subtitles>
                </OptionsWrapper>
              </Links>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Links to="/episodes">
                <OptionsWrapper>
                  <OptionImg src="/option-3.jpg" alt="option" />
                  <Subtitles variant="h4">Episodes</Subtitles>
                </OptionsWrapper>
              </Links>
            </Grid>
          </Grid>
        </Grow>
      </Contain>
    </>
  )
}
