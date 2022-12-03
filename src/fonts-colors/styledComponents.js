import styled from 'styled-components';
import color from './colors';
import bgMin from '../images/background-mobile-mini-2x.png';
import bgMob from '../images/background-mobile-2x.png';
// import bgMin from '../images/image7.png';
// import bgMob from '../images/image6.png';
import bgBig from '../images/background-mobile-2x.png';

export const sizes = {
  mobileMini: '320px',
  mobile: '425px',
  tablet: '768px',
};

export const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
};

// ============header=================//
export const Container = styled.div`
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

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  // background-color: ${color.lightDarkColor};

  @media ${device.tablet} {
    width: 95vw;
  }
`;

export const H1 = styled.h1`
  font-size: 16px;
`;

export const H2 = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
`;

export const BurgerButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${color.accentColor};
  border: 3px solid ${color.lightColor};
  border-radius: 3px;
`;

// background-image: 'url(' + img + ')');

// ==========Search ==========//

export const SearchForm = styled.input`
  border: 3px solid ${color.lightDarkColor};
  width: 300px;
  background-color: ${color.lightColor};
  border-radius: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

// ==========Music ==========//
export const Music = styled.div`
  // display: flex;
  text-align: center;
`;

// ==========Music item ==========//
export const Thumb = styled.div`
margin: 10px auto;
// margin-right:auto;
// margin-left:auto;
text-align:center;
  width: 250px;
  border: 1px solid ${color.accentColor}}

`;

export const MediaTypes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const MediaButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${color.darkColor};
  color: white;
  font-weight: 700;
  letter-spacing: 0.2em;
  font-size: 14px;
`;

export const MediaList = styled.div`
  // background-color: red;
`;
// export const MediaTitle = styled.h4`
//   color: white;
// `;

export const VideoList = styled.div`
  // width: 50px;
  // height: 50px;
  // border-radius: 50%;
  // background-color: ${color.darkColor};
`;

export const NoteList = styled.div`
  // width: 50px;
  // height: 50px;
  // border-radius: 50%;
  // background-color: ${color.lightDarkColor};
`;

export const AudioList = styled.div`
  // width: 50px;
  // height: 50px;
  // border-radius: 50%;
  // background-color: ${color.accentColor};
`;
