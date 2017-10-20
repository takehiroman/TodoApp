import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem,IconMenu,IconButton } from 'material-ui';
import { Link } from 'react-router-dom'
import List from 'material-ui/svg-icons/action/list';


const Header = () => (
    <MuiThemeProvider>
    <AppBar
    title="Todoアプリ"
    iconElementLeft = {
      <IconMenu
      iconButtonElement={<IconButton><List /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
      <MenuItem linkButton
      containerElement={<Link to="/" />}
      primaryText="Todoリスト" 
      />
      <MenuItem linkButton
      containerElement={<Link to="/search" />}
      primaryText="検索" 
      />
      </IconMenu>
    }
  />
    </MuiThemeProvider>
)

export default Header