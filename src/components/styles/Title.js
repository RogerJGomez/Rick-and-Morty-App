import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Title = styled(Typography)`
  text-align: center;
  position: relative;
  @media (max-width: 480px) {
    font-size: 60px !important;
  }
`
export default Title
