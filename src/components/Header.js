import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate, useLocation } from 'react-router'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from './DrawerMenu';

const drawerWidth = 300;

const Header = () => {
  let navigate = useNavigate()
  let location = useLocation()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"         
        sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        mb:4
      }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Total Customer Connect
          </Typography>
          {location.pathname!=='/' &&
            <IconButton
                  size="large"
                  color="inherit"
                  aria-label="back"
                  onClick={()=>navigate(-1)}>
                  <ArrowBackIcon />
                  <Typography variant='overline'>Back</Typography>
              </IconButton>
          }
        </Toolbar>
      </AppBar>
      <DrawerMenu handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} drawerWidth={drawerWidth}/>
    </Box>
    )
}

export default Header