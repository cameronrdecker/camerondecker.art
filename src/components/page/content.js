import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles, Grid, Typography} from '@material-ui/core'
import { SEO } from '../../@daisy-components'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: `10vh 2vh 1.45vh 8vh`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.background.default,
    minHeight:800,
    margin: `0 auto`,
  },
  contentShift:{
    [theme.breakpoints.up('lg')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: `calc(100% - ${theme.mainMenu.drawerWidth}px)`,
      marginLeft: theme.mainMenu.drawerWidth,
    }
  },
  contentBody:{
    marginTop: 50
  }
}))

const Content = ({ title, description, content, open }) => {

  const classes = useStyles()

  return (
    <main className={clsx(classes.content, {[classes.contentShift]: open})}>
        <div>
            <SEO title={title} />
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h2' gutterBottom>{title}</Typography>
                    <Typography variant='body1'>{description}</Typography>
                </Grid>
            </Grid>
            <div className={classes.contentBody}>{content}</div>
        </div>
    </main>
  )
}

Content.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired
}

export default Content
