import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, List, Typography, Drawer, Zoom} from '@material-ui/core'
import {NavItem} from './MenuItems'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    drawer: {
      width: theme.mainMenu.drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: theme.mainMenu.drawerWidth,
      backgroundColor: theme.palette.background.default,
      borderRight: '0px solid black',
      padding: '25px 0px 0px 25px'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'left',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      //justifyContent: 'flex-end',
    },
  }))

const DrawerMenu = ({open, setOpen, mainMenuItems}) => {
    const classes = useStyles()
    const [zoomIn, setZoomIn] = React.useState(true)

    function handleDrawerClose() {
      setOpen(false)
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
              <Zoom appear={false} in={zoomIn} timeout={{ enter: 100, exit: 12000,}}>
                <Typography onMouseEnter={()=> {  setZoomIn(false)}} onMouseLeave={()=> {  setZoomIn(true)}} variant="h1" className={classes.title} color="inherit">
                  Cameron Decker
                </Typography>
              </Zoom>
            </div>
            <List>
            {mainMenuItems.map(n => {
                return(
                    <NavItem key={n.id} item={n} nestedLevel={0}/>
                )
            })}
            </List>
        </Drawer>
    )

}

const navItem = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['item', 'itemExternal', 'group', 'collapse']).isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string,
    icon: PropTypes.string,
}

navItem.children = PropTypes.arrayOf(PropTypes.shape(navItem))

DrawerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  mainMenuItems: PropTypes.arrayOf(PropTypes.shape(navItem))
};

export default DrawerMenu