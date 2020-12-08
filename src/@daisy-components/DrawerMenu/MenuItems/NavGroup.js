import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, ListSubheader, Typography, Divider} from '@material-ui/core'
import {NavItem} from '.'

const useStyles = makeStyles(theme => ({
    subHeader:{
        marginBottom: theme.mainMenu.headerItem.marginBottom,
        fontSize: theme.mainMenu.headerItem.fontSize,
        color: theme.palette.grey[600],
        fontWeight: 800
    }
}))    

const NavGroup = ({item, nestedLevel}) => {
    const classes = useStyles()
    return (
        <>
            <Divider/>
            <ListSubheader key={item.id} className={classes.subHeader}>
                <Typography variant="overline" display="block">{item.label}</Typography>
            </ListSubheader>
            {item.children.map(n => {
                return(
                    <NavItem key={n.id} item={n} nestedLevel={nestedLevel + 1}/>
                )
            })}
        </>
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

NavGroup.propTypes = {
    item: PropTypes.shape(navItem).isRequired,
    nestedLevel: PropTypes.number.isRequired
  }

export default NavGroup