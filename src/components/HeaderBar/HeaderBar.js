import {
  Header,
  // BurgerButton,
  H1,
  H2,
  MediaButton,
  Greeting,
  AuthDiv,
} from '../../fonts-colors/styledComponents';

import {
  // useSelector,
  useDispatch,
} from 'react-redux';
import { logOut } from '../../redux/auth/operations';

import color from '../../fonts-colors/colors';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Navigation from '../../components/Navigation';
import Loader from '../Loader';

export default function HeaderBar() {
  const { isLoggedIn, user, isFetchingCurrentUser } = useAuth();

  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logOut());
  return (
    <div
      style={{
        backgroundColor: `${color.lightDarkColor}`,
        padding: '10px',
      }}
    >
      <Header>
        <NavLink
          to="/"
          style={{
            display: 'block',

            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <H1>Bloco Clandestino</H1>
          <H2>рабочие материалы</H2>
        </NavLink>

        {isFetchingCurrentUser && !user && <Loader />}
        {isLoggedIn && (
          <>
            <Navigation />
            <AuthDiv>
              <Greeting>
                привет, <br />
                {user}
              </Greeting>
              <MediaButton
                style={{
                  width: '50px',
                  height: '50px',
                  fontSize: '8px',
                  marginRight: '0px',
                  cursor: 'pointer',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}
                type="button"
                onClick={handleLogout}
              >
                Выйти
              </MediaButton>
            </AuthDiv>
          </>
        )}
      </Header>
    </div>
  );
}

//  ========кнопка Добавить композицию =============
// <Link
//           style={{
//             width: '50px',
//             height: '50px',
//             fontSize: '8px',
//             borderRadius: '50%',
//             color: 'black',
//             fontWeight: '700',
//             letterSpacing: '0.2em',
//             backgroundColor: `${color.accentColor}`,
//             display: 'flex',
//             alignContent: 'center',
//             flexWrap: 'wrap',
//           }}

//           to="/music/upload"
//                >
//           Добавить
//         </Link>
