import styled from 'styled-components'

const Banner = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative;
  @media (max-width: 768px) {
    height: 300px !important;
  }
`
export default Banner
