import {
  Suspense,
lazy
} from "react"
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import MainPage from "./pages/WellcomePage/WellcomePage";


// import { fetchMusic } from './redux/musicApi';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';


const MusicPage = lazy(() => import('./pages/MusicPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const UploadPage = lazy(() => import('./pages/UploadPage'));
const ProgramPage = lazy(() => import('./pages/ProgramPage'));

export const App = () => {

  
//   const dispatch = useDispatch()

//  useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//  }, [dispatch]);
  
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingUser)
  // const isFetchingCurrentUser = 3
  
    return (
      <>
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
                    element={<MusicPage />}
              />
                <Route 
                path="program" 
                element={<ProgramPage />}
              
              />
              
                <Route 
                path="login" 
                element={<LoginPage />} />
               <Route 
                path="music/upload" 
                element={<UploadPage />} />
                  
                <Route 
                path="*" 
                element={<Navigate to="/" />} /> 
            
            </Route>
          </Routes>
        </Suspense>        
      </>
    )
}


export default App;
