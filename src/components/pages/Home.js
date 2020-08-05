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

const optionsData = [
  {
    image: '/option-1.jpg',
    title: 'Characters',
    path: '/characters'
  },
  {
    image: '/option-2.jpg',
    title: 'Locations',
    path: '/locations'
  },
  {
    image: '/option-3.jpg',
    title: 'Episodes',
    path: '/episodes'
  }
]

const OptionItem = ({ image, title, path }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Links to={path}>
        <OptionsWrapper>
          <OptionImg src={image} alt="option" />
          <Subtitles variant="h4">{title}</Subtitles>
        </OptionsWrapper>
      </Links>
    </Grid>
  )
}

export default function Characters() {
  return (
    <>
      <Banner title="Rick and Morty" url="/banner-home.jpg" />
      <Contain>
        <Grow in={true}>
          <Grid container spacing={4}>
            {optionsData.map(option => (
              <OptionItem
                image={option.image}
                title={option.title}
                path={option.path}
              />
            ))}
          </Grid>
        </Grow>
      </Contain>
    </>
  )
}
