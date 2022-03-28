import './App.css';
import {BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Layout from './assets/layout';
import Landing from './routes/landing'
import Welcome from './routes/welcome';
import Error from './routes/error';
import Wip from './routes/wip';

function App() {
  const {authenticated} = useSelector(state=> state.user)

  const RequireAuth = ({children}) =>{
    let location = useLocation()
    if(!authenticated)
      return <Navigate to="/" state={{ from: location }} replace />
    return children
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Landing/>}/>
              <Route path='/login' element={<Wip/>}/>
              <Route path='/book' element={<Wip/>}/>
              <Route path='/guest' element={<Wip/>}/>
              <Route path='/welcome' element={
                  <RequireAuth>
                      <Welcome/>
                  </RequireAuth>}/>
            </Route>
            <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
