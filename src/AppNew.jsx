import {
  Suspense,
lazy
} from "react"
import { Route, Routes, Navigate } from 'react-router-dom';
// import  Loader from './components/Loader';
// import MusicPage from "./pages/MusicPage";
// import LoginPage from "./pages/LoginPage";
import Layout from './components/Layout';
// import { fetchMusic } from './redux/musicApi';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';


const MusicPage = lazy(() => import('./pages/MusicPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const UploadPage = lazy(() => import('./pages/UploadPage'));

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

  {/* <Route index
                element={<LoginPage />} path="/"/> */}
              
            {/* {isFetchingCurrentUser ? <Loader/> :  */}
          
                <Route
                    path="music"
                    element={<MusicPage />}
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

// function App() {
//   //--Eugen
//   const dispatch = useDispatch();
//   const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
//   const isCalculated = useSelector(authSelectors.getIsCalculated);
//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);
//   //--Eugen
//   return (
//     <>
//       {isFetchingCurrentUser ? (
//         <Spiner />
//       ) : (
//         <Suspense fallback={<Spiner />}>
//           <Routes>
//             <Route path="/" element={<MainPage />}>
       
//               <Route
//                 index
//                 element={
//                   <PublicRoute
//                     component={<HomePage />}
//                     restricted
//                     // redirectTo={'/diary'}
//                     redirectTo={!isCalculated ? '/calculator' : '/diary'}
//                     // restricted
//                   />
//                 }
//               />

//               <Route
//                 path="register"
//                 element={
//                   <PublicRoute
//                     component={<RegistrationPage />}
//                     redirectTo={'/diary'}
//                     restricted
//                   />
//                 }
//               />
       

//               <Route
//                 path="login"
//                 element={
//                   <PublicRoute
//                     component={<LoginPage />}
//                     redirectTo={isCalculated ? '/diary' : '/'}
//                     restricted
//                   />
//                 }
//               />
//               <Route
//                 path="diary"
//                 element={
//                   <PrivateRoute
//                     component={<DiaryPage />}
//                     redirectTo={'/login'}
//                     restricted
//                   />
//                 }
//               />
//               <Route
//                 path="calculator"
//                 element={
//                   <PrivateRoute
//                     component={<CalculatorPage />}
//                     redirectTo={'/login'}
//                   />
//                 }
//               />
//               <Route path="*" element={<NotFoundPage />} />
//             </Route>
//           </Routes>
//         </Suspense>
//       )}
//     </>
//   );
// }
