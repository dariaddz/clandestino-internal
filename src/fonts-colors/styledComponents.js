import styled from 'styled-components';
import color from './colors';
import bgMin from '../images/background-mobile-mini-2x.png';
import bgMob from '../images/background-mobile-2x.png';
// import bgMin from '../images/image7.png';
// import bgMob from '../images/image6.png';
import bgBig from '../images/background-mobile-2x.png';

const sizes = {
  mobileMini: '320px',
  mobile: '425px',
  tablet: '768px',
};

const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
};
// ============header=================//
const Container = styled.div`
  background-color: ${color.lightColor};
  // background-image: url(${bgMin});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

  border: 1px;
  border-color: ${color.lightColor};

  @media ${device.mobile} {
    // background-image: url(${bgMob});
    // width: 400px;
  }

  @media ${device.tablet} {
    // background-image: url(${bgBig});
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  // background-color: ${color.lightDarkColor};

  @media ${device.tablet} {
    width: 95vw;
  }
`;

const H1 = styled.h1`
  font-size: 16px;
`;

const H2 = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
`;

const BurgerButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${color.accentColor};
  border: 3px solid ${color.lightColor};
  border-radius: 3px;
`;

// background-image: 'url(' + img + ')');

// ==========Search ==========//

const SearchForm = styled.input`
  border: 3px solid ${color.lightDarkColor};
  width: 300px;
  background-color: ${color.lightColor};
  border-radius: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export { Container, Header, BurgerButton, H1, H2, SearchForm };
