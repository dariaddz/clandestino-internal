import {
  Header,
  BurgerButton,
  H1,
  H2,
} from '../../fonts-colors/styledComponents';
import color from '../../fonts-colors/colors';
import Search from '../../components/Search';
// import menuIcon from '../../images/menu-burger.svg';

export default function MainPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: `${color.lightDarkColor}`,
          paddingTop: '10px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      >
        {' '}
        <Header>
          <div>
            <H1>Bloco Clandestino</H1>
            <H2>рабочие материалы</H2>
          </div>

          <BurgerButton
          // class="menu-toggle js-open-menu"
          // aria-expanded="false"
          // aria-controls="mobile-menu"
          >
            {/* <svg
            style={{
              width: '24px',
              height: '24px',
              fill: 'black',
            }}
          >
            <use width="24" height="24" href={menuIcon}></use>
          </svg> */}
          </BurgerButton>
        </Header>
      </div>
      <Search></Search>
      <nav>navigation</nav>
      <div>music list</div>
    </>
  );
}
