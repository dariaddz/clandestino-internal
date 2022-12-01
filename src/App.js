import MainPage from './pages/MainPage';
// import Colors from './fonts-colors/colors';
import { Container } from './fonts-colors/styledComponents';
// import img from '../images/background-mobile-2x.jpg';
// import img from '../src/images/background-mobile-2x.jpg';

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
    </Container>
  );
}

export default App;
