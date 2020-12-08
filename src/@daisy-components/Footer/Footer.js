import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles, Grid} from '@material-ui/core'
import { Link } from 'gatsby'
import clsx from 'clsx'
import {withPageConfig} from '../PageConfigProvider'

const useStyles = makeStyles(theme => ({
    footer: {
      flexGrow: 1,
      paddingTop: 10,
      textAlign: 'center',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: '100%',
      paddingBottom: 10,
      maxWidth: 1100,
      margin: `0 auto`,
    },
    footerShift:{
      paddingTop: 10,
      marginLeft: theme.mainMenu.drawerWidth,
      textAlign: 'center',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: `calc(100% - ${theme.mainMenu.drawerWidth}px)`,
    },
    link: {
      color: theme.palette.primary.contrastText
    }
  }))

const Footer = ({ author, menuOpen, footerMenuItems = [] }) => {

    const classes = useStyles()

    return(
        <footer className={clsx(classes.footer, {[classes.footerShift]: menuOpen,})}>
          <Grid container>
            <Grid item xs={12}>
              © {new Date().getFullYear()} {author}
            </Grid>
            <Grid item xs={12}>
              {footerMenuItems.map((n,index) => {
                let spacer = index !== footerMenuItems.length -1 ? ' | ' : null
                if(n.type === 'item'){
                  return (
                    <span key={n.label}>
                      <Link key={n.label} className={classes.link} to={n.path}>{n.label}</Link>{spacer}
                    </span>
                  )
                }
                else if(n.type === 'itemExternal'){
                  return (
                    <span key={n.label}>
                      <a href={n.path} target={n.target}>{n.label}</a>{spacer}
                    </span>
                  )
                }
                return null;
              })}
            </Grid>
          </Grid>
        </footer>
    )

}

Footer.propTypes = {
  author: PropTypes.string,
  menuOpen: PropTypes.bool,
  footerMenuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }))
}

export default withPageConfig(Footer)