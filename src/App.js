import MainPage from './pages/MainPage';

import LoginPage from './pages/LoginPage';
import Loader from './components/Loader';

import { Container } from './fonts-colors/styledComponents';

function App() {
  return (
    <>
      <Loader />
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
    </>
  );
}

export default App;
