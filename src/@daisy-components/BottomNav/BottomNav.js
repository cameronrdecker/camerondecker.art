import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {Button, Grid, Divider, makeStyles, Icon} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container:{
        paddingTop: 75,
        paddingBottom: 50
    },
    button:{
        marginTop: 15,
    },
    rightButton:{
        textAlign: 'right'
    },
    link:{
        textDecoration: 'none'
    }
}))

const BottomNav = ({leftLabel, leftPath, rightLabel, rightPath}) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Divider/>
            <Grid container>
                <Grid item xs={6}>
                    {leftPath ? 
                        <Link className={classes.link} to={leftPath}>
                            <Button className={classes.button} color="secondary" startIcon={<Icon>keyboard_arrow_left</Icon>}>{leftLabel}</Button>
                        </Link>
                    :null}
                </Grid>
                <Grid className={classes.rightButton} item xs={6}>
                    {rightPath ? 
                        <Link className={classes.link} to={rightPath}>
                            <Button className={classes.button} color="secondary" endIcon={<Icon>keyboard_arrow_right</Icon>}>{rightLabel}</Button>
                        </Link>
                    :null }
                </Grid>
            </Grid>
        </div>
    )
}

BottomNav.propTypes = {
    leftLabel: PropTypes.string,
    leftPath: PropTypes.string,
    rightLabel: PropTypes.string,
    rightPath: PropTypes.string
};

export default BottomNav