import {useEffect,
  Suspense,
lazy
} from "react"
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from 'react-router-dom';
import {fetchCurrentUser} from './redux/auth/operations'

import Layout from './components/Layout';
import MainPage from "./pages/WellcomePage/WellcomePage";
import { useAuth } from "./hooks/useAuth";

import { RestrictedRoute } from "./components/routs/RestrictedRoute";
import { PrivateRoute } from "./components/routs/PrivateRoute";

// import { fetchMusic } from './redux/musicApi';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';


const MusicPage = lazy(() => import('./pages/MusicPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const UploadPage = lazy(() => import('./pages/UploadPage'));
const ProgramPage = lazy(() => import('./pages/ProgramPage'));

export const App = () => {

  
  const dispatch = useDispatch()
  const { isFetchingCurrentUser } = useAuth()
  
 useEffect(() => {
    dispatch(fetchCurrentUser());
 }, [dispatch]);
  
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingUser)
  // const isFetchingCurrentUser = 3
  
    return (
      <>
        {isFetchingCurrentUser ? <div>Загружжжжжжаем....</div> : (
          <Suspense fallback={
          <div>Загружжжжжжаем....</div>
          // <Loader />
        }>


          <Routes>
            <Route  path="/" element={<Layout />}>

  <Route index
                element={<MainPage />} path="/"/>
              
            {/* {isFetchingCurrentUser ? <Loader/> :  */}
          
                <Route
                    path="music"
                  element={<PrivateRoute component = {MusicPage} redirectTo='/login'/>
                    }
              />
                <Route 
                path="program" 
                element={<ProgramPage />}
              
              />
              
                <Route 
                path="login" 
                  element={<RestrictedRoute component = {LoginPage} redirectTo='/music'/>} />
               <Route 
                path="music/upload" 
                element={<UploadPage />} />
                  
                <Route 
                path="*" 
                element={<Navigate to="/" />} /> 
            
            </Route>
          </Routes>
        </Suspense>        )}
        
      </>
    )
}


export default App;
