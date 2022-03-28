import * as React from 'react';
import {Box, List, Drawer, ListItem,ListItemText, Toolbar, Typography} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const DrawerMenu = (props) => {
  const { window, handleDrawerToggle, mobileOpen, drawerWidth } = props;
  const location= useLocation()
  const drawer = (
    <>
      <Toolbar/>
      <List>
        {menuItems.map((item, key) => (
          <Link to={item.link} key={key}>
            <ListItem button className={location.pathname===item.link?'active':''}>
              <div>
                <ListItemText primary={item.text}/>
                <Typography variant="overline" display="block" gutterBottom>
                    {item.subText}
                </Typography>
              </div>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="menu items"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            flexShrink:0,
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      </>
  );
}

const menuItems = [
  {
      text: 'Find My Records',
      subText:'Serviced a vehicle here before?',
      link:'/'
      
  },
  {
      text:'Continue as Guest',
      subText:'First appointment',
      link:'/guest'

  },
  {
      text:'In a Rush',
      subText:'Book next available appointment',
      link:'/book'
  },
  {
      text:'Log In',
      subText:'Have an account with us?',
      link:'/login'
  }
]

export default DrawerMenu;
