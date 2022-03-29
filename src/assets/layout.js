import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import {Container} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 300;

const theme = createTheme({
    palette: {
      primary: {
        main: '#f38732',
        contrastText: '#fff'
      },
      secondary:{
        main:'rgba(0, 0, 0, 0.1)',
        dark:'#f38732'
      }
    },
  })

export const Layout = () => {
    return(
      <ThemeProvider theme={theme}>
        <Header drawerWidth = {drawerWidth}/>
        <Container maxWidth='false' sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          mt:'80px'
        }}>
          <Outlet/>
        </Container>
      </ThemeProvider>
    )
}

export default Layout