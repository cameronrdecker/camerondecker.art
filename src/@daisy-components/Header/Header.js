import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import {makeStyles, AppBar, Toolbar, Typography} from '@material-ui/core'
import { withPageConfig } from '../PageConfigProvider'
import Logo from '../Logo'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${theme.mainMenu.drawerWidth}px)`,
        marginLeft: theme.mainMenu.drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
    },
    toolbar:{
      paddingRight: 0
    },
    title:{
      flexGrow: 1,
      fontFamily: '',
      fontWeight: 'normal',
      fontSize: '45px'
    },
    logoButton: {
      width: 60, 
      paddingRight:10,
      "&:focus": {
        outline: 'none'
      }
    },
    hide: {
      display: 'none',
    }
  }))

const Header = ({ siteTitle, menuOpen, toggleMenu }) => {
  const classes = useStyles()

  function logoKeyPress(e){
    if (e.key === "Enter") {
      toggleMenu()
    }
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: menuOpen,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.logoButton} role="button" tabIndex="0" aria-pressed={menuOpen} onKeyDown={logoKeyPress} onClick={toggleMenu}>
            <Logo/>
          </div>
          <Typography variant="h6" className={classes.title} color="inherit">
            {siteTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
 
Header.propTypes = {
  siteTitle: PropTypes.string,
  menuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withPageConfig(Header)
