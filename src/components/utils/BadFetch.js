import React from 'react'
import { Alert } from '@material-ui/lab'

export default function BadFetch() {
  return (
    <Alert variant="filled" severity="error">
      There was an error fetching the data! (404)
    </Alert>
  )
}
