import * as React from 'react';
import {Divider, Box, List, Drawer, ListItem,ListItemText, Toolbar, Typography} from '@mui/material';
import { menuItems } from '../assets/data'
import { Link, useLocation } from 'react-router-dom';

const DrawerMenu = (props) => {
  const { window, handleDrawerToggle, mobileOpen, drawerWidth } = props;
  const location= useLocation()
  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <Link to={item.link} className={location.pathname===item.link?'active':''} key={key}>
            <ListItem button>
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      </>
  );
}

export default DrawerMenu;
