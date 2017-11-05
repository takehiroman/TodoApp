import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem, IconMenu, IconButton } from 'material-ui';
import { Link } from 'react-router-dom'
import List from 'material-ui/svg-icons/action/list';


const Header = () => (
  <MuiThemeProvider>
    <AppBar
      title="Todoリスト"
      iconElementLeft={
        <IconMenu
          iconButtonElement={<IconButton><List /></IconButton>}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <MenuItem 
            containerElement={<Link to="/" />}
            primaryText="Todoリスト"
          />
          <MenuItem 
            containerElement={<Link to="/search" />}
            primaryText="検索"
          />
          <MenuItem 
          containerElement={<Link to="/bookmark" />}
          primaryText="ブックマーク"
          />
        </IconMenu>
      }
    />
  </MuiThemeProvider>
)

export default Header