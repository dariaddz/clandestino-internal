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
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

export default function HeaderBar() {
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: `${color.lightDarkColor}`,
        padding: '10px',
      }}
    >
      <Header>
        <Link to="/">
          <H1>Bloco Clandestino</H1>
          <H2>рабочие материалы</H2>
        </Link>

        {isLoggedIn && (
          <>
            <Navigation />

            <MediaButton
              style={{
                width: '50px',
                height: '50px',
                fontSize: '8px',
                marginRight: '0px',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => dispatch(logOut())}
            >
              Выйти
            </MediaButton>
          </>
        )}
      </Header>
    </div>
  );
}

{
  /* ========кнопка Добавить композицию ============= */
}
{
  /* <Link
          style={{
            width: '50px',
            height: '50px',
            fontSize: '8px',
            borderRadius: '50%',
            color: 'black',
            fontWeight: '700',
            letterSpacing: '0.2em',
            backgroundColor: `${color.accentColor}`,
            display: 'flex',
            alignContent: 'center',
            flexWrap: 'wrap',
          }}
          
          to="/music/upload"
               >
          Добавить
        </Link> */
}
