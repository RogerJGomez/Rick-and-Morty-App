import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import RoomRoundedIcon from '@material-ui/icons/RoomRounded'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import styled from 'styled-components'

const drawerWidth = 240

const Logo = styled.img`
  width: 200px;
  height: 66px;
  @media (max-width: 768px) {
    height: 50px !important;
    width: 150px !important;
  }
`
const LeftLogo = styled.img`
  width: 150px;
  height: 50px;
`
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarScroll: {
    backgroundColor: '#202329d1'
  },
  appBar: {
    height: '80px',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolBar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    backgroundColor: '#202329d1',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}))

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 29
  })

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(trigger ? classes.appBarScroll : classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <RouterLink to="/">
            <Logo
              className={clsx(open && classes.hide)}
              src="/logo-banner.png"
              alt="logo-banner"
              draggable={false}
            />
          </RouterLink>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
        style={{ background: 'transparent' }}
      >
        <div className={classes.drawerHeader}>
          <LeftLogo src="/logo-banner.png" alt="logo-banner" />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'Characters', 'Locations', 'Episodes'].map(
            (text, index) => (
              <ListItem
                component={RouterLink}
                to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                button
                onClick={handleDrawerClose}
                key={text}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <HomeRoundedIcon />
                  ) : index === 1 ? (
                    <AccountCircleRoundedIcon />
                  ) : index === 2 ? (
                    <RoomRoundedIcon />
                  ) : (
                    <LiveTvRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
    </div>
  )
}
