import MainPage from './pages/MainPage';

import LoginPage from './pages/LoginPage';
import { Container } from './fonts-colors/styledComponents';

function App() {
  return (
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
  );
}

export default App;
