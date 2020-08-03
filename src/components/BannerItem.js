import React from 'react'
import BannerWrapper from './styles/BannerWrapper'
import Title from './styles/Title'
import Banner from './styles/Banners'
import Blur from './styles/Blur'

const BannerItem = ({ url, title }) => {
  return (
    <>
      <BannerWrapper>
        <Banner path={url}>
          <Blur />
          <Title variant="h1">{title}</Title>
        </Banner>
      </BannerWrapper>
    </>
  )
}

export default BannerItem
