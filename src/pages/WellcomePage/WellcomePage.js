import { Page, WellcomeBtn } from '../../fonts-colors/styledComponents';
// import color from '../../fonts-colors/colors';
// import Search from '../../components/Search';
// import Navigation from '../../components/Navigation';
// import MusicItem from '../../components/MisicItem';
// import LoadMore from '../../components/LoadMore';
// // import menuIcon from '../../images/menu-burger.svg';
import { NavLink } from 'react-router-dom';

export default function WellcomePage() {
  return (
    <Page>
      <NavLink to="/login">
        <WellcomeBtn>войти</WellcomeBtn>
      </NavLink>
    </Page>
  );
}
