import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const InfoWrapper = styled(Grid)`
  text-align: ${props => props.text};
  padding: ${props => props.padding};
`
export default InfoWrapper
