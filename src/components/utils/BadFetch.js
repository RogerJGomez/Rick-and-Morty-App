import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '20vh auto',
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

export default function BadFetch() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="error">
        There was an error fetching the data! (404)
      </Alert>
    </div>
  )
}
