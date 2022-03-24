import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate, useLocation } from 'react-router'

const Header = () => {
  let navigate = useNavigate()
  let location = useLocation()
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{mb:4}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Total Customer Connect
          </Typography>
          {location.pathname!=='/' &&
            <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="back"
                  sx={{ mr: 2 }}
                  onClick={()=>navigate('/')}>
                  <ArrowBackIcon />
                  <Typography variant='overline'>Back</Typography>
              </IconButton>
          }
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header