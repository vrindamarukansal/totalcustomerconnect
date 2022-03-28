import React from 'react'
import { AppBar, Box, Toolbar, IconButton} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate, useLocation } from 'react-router'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from './DrawerMenu';
import logo from '../logo.png'

const Header = ({drawerWidth}) => {
  let navigate = useNavigate()
  let location = useLocation()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  
        color='transparent'       
        sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="div" sx={{ flexGrow: 1, paddingY:2}}>
            <img src={logo} className='logo' alt='total customer connect'/>
          </Box>
          {location.pathname!=='/' &&
            <IconButton
                  size="large"
                  color="inherit"
                  aria-label="back"
                  onClick={()=>navigate(-1)}>
                  <ArrowBackIcon />
              </IconButton>
          }
        </Toolbar>
      </AppBar>
      <DrawerMenu handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} drawerWidth={drawerWidth}/>
    </Box>
    )
}

export default Header