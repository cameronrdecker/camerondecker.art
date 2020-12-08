import React from 'react';
import {makeStyles} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    loading: {
        width: "100%",
        textAlign: "center",
        padding: "40vh"
    }
}))

const Loading = () => {
    const classes = useStyles()
    return (
        <div className={classes.loading}>
            <CircularProgress color='secondary' size={100} />
        </div>
    )
}

export default Loading