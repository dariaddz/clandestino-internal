import styled from 'styled-components';
import color from './colors';

const sizes = {
  tablet: '768px',
};

const device = {
  tablet: `(min-width: ${sizes.tablet})`,
};

const Container = styled.div`
  background-color: ${color.lightColor};
  width: 100%;
  padding: 10px;
  //   @media ${device.tablet} {
  //     background-color: red;
  //   }
`;

const Header = styled.h2`
  color: red;
`;
export { Container, Header };
