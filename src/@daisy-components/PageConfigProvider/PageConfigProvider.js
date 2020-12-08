//A provider for storing state of page elements, like the side menu open/close state, toolbar menu state, etc
import React from 'react';
const { createContext, useState } = React;

//provide defaults or webpack will complain upon running gatsby build
const Context = createContext({
  menuOpen:true,
  menuCollapseItems: {},
  toggleMenu: () => {},
  toggleMenuItem: () => {}
});

const PageConfigProvider = props => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [menuCollapseItems, setMenuCollapseItems] = useState({})

    function toggleMenu(){
        setMenuOpen(menuOpen => !menuOpen)
    }

    function toggleMenuItem(id){
      if(menuCollapseItems[id] !== null){
        setMenuCollapseItems({...menuCollapseItems, [id]:!menuCollapseItems[id]})
      }
      else{
        setMenuCollapseItems({...menuCollapseItems, [id]:false})
      }
    }

    return (
      <Context.Provider value={{ menuOpen, toggleMenu, menuCollapseItems, toggleMenuItem }}>
        {props.children}
      </Context.Provider>
    );
};

function withPageConfig(Component) {
    return function LocalizedComponent(props) {
      return (
        <Context.Consumer>
          {context => {
            return (
              <Component
                {...props}
                menuOpen={context.menuOpen}
                toggleMenu={context.toggleMenu}
                menuCollapseItems={context.menuCollapseItems}
                toggleMenuItem={context.toggleMenuItem}
              />
            );
          }}
        </Context.Consumer>
      );
    };
}

export {PageConfigProvider, withPageConfig}