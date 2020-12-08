import React from 'react';
import PropTypes from 'prop-types';
import {navigate} from 'gatsby';
import {Button, Icon, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        marginBottom: theme.spacing(3),
      }
}))

const BackButton = ({path, label}) => {
    const classes = useStyles()

    return (
        <>
            <Button color="secondary" className={classes.button} onClick={() => navigate(path)}>
                <Icon>keyboard_arrow_left</Icon>
                {label || 'Back'}
            </Button>
        </>
    );
}

BackButton.propTypes = {
    path: PropTypes.string.isRequired,
    label: PropTypes.string
  };


export default BackButton;

