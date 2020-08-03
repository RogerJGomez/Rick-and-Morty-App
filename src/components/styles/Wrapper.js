import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const Wrapper = styled(Grid)`
  border-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: rgb(60, 62, 68);
  min-height: 150px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  overflow: hidden;
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: 0px -1px 48px -3px rgba(20, 179, 89, 1);
    -moz-box-shadow: 0px -1px 48px -3px rgba(20, 179, 89, 1);
    box-shadow: 0px -1px 48px -3px rgba(20, 179, 89, 1);
  }
`
export default Wrapper
