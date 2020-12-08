import React from 'react'
import PropTypes from 'prop-types'
import {NavLink, NavLinkExternal, NavGroup, NavCollapse} from '.'

const NavItem = ({item, nestedLevel}) => {
    switch(item.type){
        case 'itemExternal':
            return (
                <NavLinkExternal key={item.id} item={item} nestedLevel={nestedLevel}/>
            )
        case 'group':
            return (
                <NavGroup key={item.id} item={item} nestedLevel={nestedLevel}/>
            )
        case 'collapse':
            return (
                <NavCollapse key={item.id} item={item} nestedLevel={nestedLevel}/>
            )
        default:
            return (
                <NavLink key={item.id} item={item} nestedLevel={nestedLevel}/>
            )   
    }
    

}

const navItem = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['item', 'itemExternal', 'group', 'collapse']).isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string,
    icon: PropTypes.string,
}

navItem.children = PropTypes.arrayOf(PropTypes.shape(navItem))

NavItem.propTypes = {
    item: PropTypes.shape(navItem).isRequired,
    nestedLevel: PropTypes.number.isRequired
  }


export default NavItem