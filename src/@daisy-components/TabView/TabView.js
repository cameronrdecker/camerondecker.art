import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  tabsRoot: {
    borderBottom: `2px solid ${theme.palette.grey[300]}`
  },
  tabsIndicator: {
    backgroundColor: theme.palette.secondary.main,
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: "800",
    color: theme.palette.grey[600],
    marginRight: theme.spacing(1),
    '&:hover': {
      color: '#676767',
      opacity: 1,
    },
    '&$tabSelected': {
      color: theme.palette.secondary.main,
      fontWeight: "800",
    },
    '&:focus': {
      color: theme.palette.secondary.main,
    },
  },
  tabSelected: {
    fontWeight: "800",
  },
  typography: {
    padding: theme.spacing(3)
  },
}))

const TabView = ({tabs, currentTab, setCurrentTab}) => {
    const classes = useStyles()

    function handleChange (event, value){
        setCurrentTab(value);
    };
    
    return (
        <div className={classes.root}>
            <Tabs
            value={currentTab}
            onChange={handleChange}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            >
            {
                tabs.map(tab => {
                    return (
                    <Tab disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label={tab} key={tab}  /> 
                    )
                })
            }
            </Tabs>
        </div>
     );
}

TabView.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentTab: PropTypes.number.isRequired,
  setCurrentTab: PropTypes.func.isRequired
};


export default TabView;