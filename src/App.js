import './App.css';
import {BrowserRouter, Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom'
import Header from './components/Header'
import {useSelector} from 'react-redux'
import Landing from './routes/landing'
import Welcome from './routes/welcome';
import Error from './routes/error';
import {Container} from '@mui/material'
function App() {
  const {authenticated} = useSelector(state=> state.user)

  const RequireAuth = ({children}) =>{
    let location = useLocation()
    if(!authenticated)
      return <Navigate to="/" state={{ from: location }} replace />
    return children
  }

  const Layout = () => {
    return(
      <>
        <Header/>
        <Container maxWidth='md'>
          <Outlet/>
        </Container>
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Landing/>}/>
              <Route path='/welcome' element={
                  <RequireAuth>
                      <Welcome/>
                  </RequireAuth>}/>
              <Route path='*' element={<Error/>}/>
            </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
