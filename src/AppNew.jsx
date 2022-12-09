// import { Suspense } from "react"
import { Route, Routes, Navigate } from 'react-router-dom';
// import  Loader from './components/Loader';
import MusicPage from "./pages/MusicPage";
import LoginPage from "./pages/LoginPage";
import Layout from './components/Layout';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

export const App = () => {
 
//   const dispatch = useDispatch()

//  useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//  }, [dispatch]);
  
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingUser)
  // const isFetchingCurrentUser = 3
  
    return (
      <>
        {/* <Suspense fallback={<Loader/>}> */}
          <Routes>
            <Route exact path="/" element={<Layout />}>

  <Route index
                element={<LoginPage />} path="/"/>
              
            {/* {isFetchingCurrentUser ? <Loader/> :  */}
            <>
                <Route
                    path="/music"
                    element={<MusicPage />}
                 />
                  
                <Route 
                path="/login" 
                element={<LoginPage />} />
                  
                <Route 
                path="*" 
                element={<Navigate to="/" />} /> 
            </>



            {/* <Route index
                element={<PublicRoute redirectTo="/music" restricted>
                  <LoginPage />
                </PublicRoute>} />
              
            {isFetchingCurrentUser ? <Loader/> : 
            <>
                <Route
                path="/music"
                element={<PrivateRoute redirectTo="/login">
                    <MusicPage />
                </PrivateRoute>} />
                  
                <Route 
                path="/login" 
                element={<PublicRoute redirectTo="/music" restricted>
                  <LoginPage />
                </PublicRoute>} />
                  
                <Route 
                path="*" 
                element={<Navigate to="/" />} /> 
            </>} */}
            </Route>
          </Routes>
        {/* </Suspense>         */}
      </>
    )
}


export default App;