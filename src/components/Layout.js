import React from 'react'
import AppBar from './AppBar'

export default function Layout(props) {
  return (
    <>
      <AppBar />
      {props.children}
    </>
  )
}
