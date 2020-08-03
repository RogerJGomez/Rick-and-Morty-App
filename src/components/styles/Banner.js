import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% {
  	transform: scale(1.3);
  }
  50% {
  	transform: scale(1);
  }
  100%{
    transform: scale(1.3);
  }
  `
const Banner = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  animation: ${animate} ease-in-out 20s 0s infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
`
export default Banner
