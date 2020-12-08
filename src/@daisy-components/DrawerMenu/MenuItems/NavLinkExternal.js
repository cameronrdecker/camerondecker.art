import React from 'react'
import PropTypes from 'prop-types'
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
    icon: theme.mainMenu.icon
}))    

const NavLinkExternal = ({item, nestedLevel}) => {
    const classes = useStyles({itemPadding: nestedLevel > 1 ? 25 + nestedLevel * 16 : 16})
    return (
        <ListItem component="a" role="button" href={item.path} target={item.target ? item.target : '_blank'} button className={classes.menuButton}>
            {item.icon && (
                <Icon className={classes.icon}>
                    {item.icon}
                </Icon>
            )}
            <ListItemText classes={{primary: classes.menuItem}}>{item.label}</ListItemText>
        </ListItem>
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

NavLinkExternal.propTypes = {
    item: PropTypes.shape(navItem).isRequired,
    nestedLevel: PropTypes.number.isRequired
  }


export default NavLinkExternal