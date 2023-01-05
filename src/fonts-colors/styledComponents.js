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
  desctop: '1020px',
};

export const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  desctop: `(min-width: ${sizes.desctop})`,
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
  color: black;
  @media ${device.mobile} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.desctop} {
    font-size: 26px;
  }
  &:hover,
  &:focus {
    box-shadow: 0 7px 9px -4px ${color.accentColor};
  }
`;

export const H2 = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  color: black;
  @media ${device.mobile} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.desctop} {
    font-size: 20px;
  }
`;

export const BurgerButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${color.accentColor};
  border: 3px solid ${color.lightColor};
  border-radius: 3px;
`;

export const WellcomeBtn = styled.button`
  width: 120px;
  height: 40px;
  border: 2px solid ${color.accentColor};
  border-radius: 3px;
  background: linear-gradient(
    to bottom right,
    ${color.accentColor} 20%,
    ${color.semiLightColor} 20% 50%,
    ${color.lightColor} 50%
  );
  color: black;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.2em;
  &:hover,
  &:focus {
    box-shadow: 0 7px 9px -3px ${color.accentColor};
  }
`;

// background-image: 'url(' + img + ')');

// ==========Search ==========//

export const SearchForm = styled.input`
  border: 3px solid ${color.lightColor};
  width: 280px;
  background-color: ${color.accentColor};
  border-radius: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FormTitle = styled.h3`
  font-size: 16px;
  // text-transform: uppercase;
  @media ${device.desctop} {
    font-size: 20px;
  }
`;

// ==========Music ==========//
export const Page = styled.div`
  // display: flex;
  padding-top: 20px;
  padding-bottom: 20px;

  text-align: center;
  @media ${device.tablet} {
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
// background: linear-gradient(90deg, #fcff9e 0%, #c67700 100%);
// ==========Music item ==========//
export const Thumb = styled.div`
  cursor: pointer;
  margin: 20px auto;
  padding-top: 10px;
  text-align: center;
  width: 250px;
  background: linear-gradient(
    ${color.lightDarkColor} 0%,
    ${color.lightColor} 100%
  );
  // border: 1px solid ${color.accentColor};
  @media ${device.mobile} {
    width: 400px;
  }
  @media ${device.tablet} {
    margin-left: 0;
    margin-right: 15px;
    width: 300px;
  }
`;
export const MusicName = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  @media ${device.desctop} {
    font-size: 20px;
  }
`;

export const MediaTypes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const MediaButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: auto;
  // margin-right: 20px;
  // background-color: ${color.darkColor};
  color: black;
  font-weight: 700;
  letter-spacing: 0.2em;
  font-size: 8px;
  // &:hover,
  // &:focus {
  //   box-shadow: 0 7px 9px -3px ${color.accentColor};
  // }
  &: nth-of-type(3n + 1) {
    background-color: ${color.lightColor};
  }
  &: nth-of-type(3n+2) {
    background-color: ${color.accentColor};
  }
  &: nth-of-type(3n+3) {
    background-color: ${color.semiLightColor};
  }

  @media ${device.desctop} {
    width: 60px;
    height: 60px;
    font-size: 14px;
  }
`;

export const MediaListDiv = styled.div`
  color: ${color.accentColor};
`;
// export const MediaTitle = styled.h4`
//   color: white;
// `;

export const VideoList = styled.div`
  // width: 50px;
  // height: 50px;
  // border-radius: 50%;
  display: flex;
  align-content: center;

  background-color: ${color.darkColor};
`;

export const NoteList = styled.div`
  // width: 50px;
  // height: 50px;
  // border-radius: 50%;
  display: flex;
  align-content: center;
  background-color: ${color.lightDarkColor};
`;

export const AudioList = styled.div`
  // width: 50px;
  // height: 50px;
  // border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  align-content: center;
  background-color: ${color.accentColor};
`;

// =========Login===========

export const PassForm = styled.input`
  border: 3px solid ${color.lightDarkColor};
  width: 180px;
  background-color: ${color.lightColor};
  border-radius: 3px;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-right: 10px;

  @media ${device.mobile} {
    margin-right: 30px;
  }
`;

// =========MODAL=========
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  overflow: auto;
`;

export const ModalDiv = styled.div`
  width: 240px;
  position: relative;
  margin: 10% auto;
  padding: 40px 30px 10px 30px;
  background: ${color.lightColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    width: 450px;
  }
  @media ${device.desctop} {
    width: 600px;
  }
`;

export const CloseBtn = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 20px auto;
  font-weight: 700;
  background-color: ${color.accentColor};

  &:hover,
  &:focus {
    box-shadow: 0 7px 9px -4px ${color.accentColor};
  }
`;
export const MediaListUl = styled.li`
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 10px;
  margin: 10px 0 10px 20px;
`;

export const LinkListItem = styled.li`
  font-size: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: black;
  @media ${device.desctop} {
    font-size: 14px;
  }
`;

// @media ${device.mobile} {
//     font-size: 18px;
//   }
//   @media ${device.tablet} {
//     font-size: 20px;
//   }
