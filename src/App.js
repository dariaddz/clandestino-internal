// import { Suspense } from 'react';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
// import Loader from './components/Loader';

import { Container } from './fonts-colors/styledComponents';

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <Container
      // style={{
      //   backgroundImage: 'url(' + img + ')',
      //   backgroundPosition: 'center',
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   height: '100vh',
      //   width: '100vw',
      // }}
      >
        <MainPage />
        <LoginPage />
      </Container>
      {/* </Suspense> */}
    </>
  );
}

export default App;
