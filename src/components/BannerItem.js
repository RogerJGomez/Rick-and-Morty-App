import React from 'react'
import BannerWrapper from './styles/BannerWrapper'
import Title from './styles/Title'
import Banners from './styles/Banners'
import Blur from './styles/Blur'
import styled from 'styled-components'

const BannerItem = ({ url, title }) => {
  const Banner = styled(Banners)`
    background-image: url(${url});
  `
  return (
    <>
      <BannerWrapper>
        <Banner>
          <Blur />
          <Title variant="h2" gutterBottom>
            {title}
          </Title>
        </Banner>
      </BannerWrapper>
    </>
  )
}

export default BannerItem
