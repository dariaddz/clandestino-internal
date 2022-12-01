import styled from 'styled-components';
import color from './colors';
import bgMin from '../images/background-mobile-mini-2x.jpg';
import bgMob from '../images/background-mobile-2x.jpg';
import bgBig from '../images/background-2x.jpg';

const sizes = {
  mobileMini: '320px',
  mobile: '425px',
  tablet: '768px',
};

const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
};

const Container = styled.div`
  background-color: ${color.lightColor};
  background-image: url(${bgMin});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  width: 100%;
  padding: 10px;

  @media ${device.mobile} {
    background-image: url(${bgMob});
  }

  @media ${device.tablet} {
    background-image: url(${bgBig});
  }
`;

const Header = styled.h2`
  color: red;
`;
export { Container, Header };

// background-image: 'url(' + img + ')');
