import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'

const Cont = styled(Container)`
  margin: 10vh 5%;
`
export default function Contain(props) {
  return <Cont>{props.children}</Cont>
}
