import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Icon , ListItem, ListItemText, List, Collapse } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import {NavItem} from '.'
import {withPageConfig} from '../../PageConfigProvider' 

const useStyles = makeStyles(theme => ({
    menuButton: {
        ...theme.mainMenu.menuButton,
        paddingTop: 0,
        paddingBottom: 0},
    menuItem: {
        fontSize: theme.mainMenu.menuItem.fontSize,
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    icon:  {
        color: theme.palette.text.primary,
        marginRight:theme.mainMenu.icon.marginRight,
        fontSize: theme.mainMenu.icon.menuFontSize,
    },
    expandCollapse:{
        color: theme.palette.text.primary,
        fontSize: 18
    }
}))    

const NavCollapse = ({item, nestedLevel, menuCollapseItems, toggleMenuItem}) => {
    const classes = useStyles()
    
    function handleClick() {
		toggleMenuItem(item.id);
	}
    return (
        <List style={{padding:0}}>
            <ListItem button onClick={handleClick} className={classes.menuButton}>
                {item.icon && (
                    <Icon className={classes.icon}>
                        {item.icon}
                    </Icon>
                )}
                <ListItemText classes={{primary: classes.menuItem}}>{item.label}</ListItemText>
                {menuCollapseItems[item.id] || false ? <KeyboardArrowUpIcon className={classes.expandCollapse}/> : <KeyboardArrowDownIcon className={classes.expandCollapse} />}
            </ListItem>
            {item.children && (
				<Collapse in={menuCollapseItems[item.id] || false}>
					{item.children.map(n => (
						<NavItem key={n.id} item={n} nestedLevel={nestedLevel + 1}/>
					))}
				</Collapse>
			)}
        </List>

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

NavCollapse.propTypes = {
    item: PropTypes.shape(navItem).isRequired,
    nestedLevel: PropTypes.number.isRequired,
    menuCollapseItems: PropTypes.objectOf(PropTypes.bool).isRequired,
    toggleMenuItem: PropTypes.func.isRequired
  }

export default withPageConfig(NavCollapse)