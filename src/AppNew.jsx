import {useEffect,
  Suspense,
lazy
} from "react"
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from 'react-router-dom';
import {fetchCurrentUser} from './redux/auth/operations'
import { useAuth } from "./hooks/useAuth";

import Layout from './components/Layout';
import MainPage from "./pages/WellcomePage/WellcomePage";
import Loader from "./components/Loader/Loader";


import { RestrictedRoute } from "./components/routs/RestrictedRoute";
import { PrivateRoute } from "./components/routs/PrivateRoute";




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
        {isFetchingCurrentUser ? <Loader /> : (
          <Suspense fallback={
          <Loader />
          // <Loader />
        }>


          <Routes>
            <Route  path="/" element={<Layout />}>

  <Route index
                element={<MainPage />} path="/"/>
              
                
                 <Route 
                path="login" 
                  element={<RestrictedRoute component = {LoginPage} redirectTo='/music'/>} />
            {/* {isFetchingCurrentUser ? <Loader/> :  */}
          
                <Route
                    path="music"
                  element={<PrivateRoute component = {MusicPage} redirectTo='/login'/>
                    }
              />
                <Route 
                path="program" 
                element={<PrivateRoute component = {ProgramPage} redirectTo='/login'/>
                    }
              
              
              />
                 <Route 
                  path="music/upload"
                  element={<PrivateRoute component={UploadPage} redirectTo='/login' />}
                  
                />
               
            
                  
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
