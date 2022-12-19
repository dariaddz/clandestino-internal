import {
  Header,
  // BurgerButton,
  H1,
  H2,
  MediaButton,
} from '../../fonts-colors/styledComponents';

import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/userSlice';

import color from '../../fonts-colors/colors';

export default function HeaderBar() {
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: `${color.lightDarkColor}`,
        paddingTop: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      <Header>
        <div>
          <H1>Bloco Clandestino</H1>
          <H2>рабочие материалы</H2>
        </div>

        {isLoggedIn && (
          <MediaButton
            style={{
              width: '40px',
              height: '40px',
              fontSize: '8px',
            }}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Выйти
          </MediaButton>
        )}
        {/* <BurgerButton
        class="menu-toggle js-open-menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
        >
          <svg
                style={{
                width: '24px',
                height: '24px',
                fill: 'black',
                }}
            >
                <use width="24" height="24" href={menuIcon}></use>
            </svg>
        </BurgerButton> */}
      </Header>
    </div>
  );
}
