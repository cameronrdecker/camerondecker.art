import React from 'react'
import {makeStyles,} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    section: {
        border: `2px solid ${theme.palette.grey[300]}`,
        padding: '2rem',
        marginBottom: '3rem'
    }
}))

const Section = ({ children }) => {

  const classes = useStyles()

  return (
    <div className={classes.section}>
        {children}
    </div>
  )
}

export default Section
