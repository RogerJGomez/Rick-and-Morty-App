import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

export default function Progress() {
  return (
    <Wrapper>
      <LinearProgress color="secondary" />
    </Wrapper>
  )
}
