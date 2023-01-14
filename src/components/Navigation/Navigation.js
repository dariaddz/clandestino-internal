import { NavLink } from 'react-router-dom';
import { NavigationDiv } from '../../fonts-colors/styledComponents';

import s from './Navigation.module.css';

export default function Navigation() {
  const activeLink = `${s.active}`;
  const inActiveLink = `${s.inactive}`;

  return (
    <NavigationDiv>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : inActiveLink)}
        to="/music"
      >
        Композиции
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : inActiveLink)}
        to="/program"
      >
        Программы
      </NavLink>
    </NavigationDiv>
  );
}
