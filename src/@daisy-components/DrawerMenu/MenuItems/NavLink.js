import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { makeStyles, Icon, ListItem, ListItemText} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    menuButton: props => ({
        ...theme.mainMenu.menuButton,
        paddingLeft: props.itemPadding > 80 ? 80 : props.itemPadding,
        paddingTop: 0,
        paddingBottom: 0
    }),
    menuItem: {
        fontSize: theme.mainMenu.menuItem.fontSize,
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    icon: {
        color: theme.palette.text.primary,
        marginRight:theme.mainMenu.icon.marginRight,
        fontSize: theme.mainMenu.icon.menuFontSize,
    },
}))    

const NavLink = ({item, nestedLevel}) => {
    const classes = useStyles({itemPadding: nestedLevel > 1 ? 25 + nestedLevel * 16 : 16})
    return (
        <Link style={{ textDecoration: 'none' }} key={item.id} to={item.path}>
            <ListItem selected={window.location.pathname === item.path ? true : false} button className={classes.menuButton}>
                {item.icon && (
                    <Icon className={classes.icon}>
                        {item.icon}
                    </Icon>
                )}
                <ListItemText classes={{primary: classes.menuItem}}>{item.label}</ListItemText>
            </ListItem>
        </Link>
    )

}

const navItem = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['item', 'itemExternal', 'group', 'collapse']).isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

navItem.children = PropTypes.arrayOf(PropTypes.shape(navItem))

NavLink.propTypes = {
    item: PropTypes.shape(navItem).isRequired,
    nestedLevel: PropTypes.number.isRequired
  }

export default NavLink