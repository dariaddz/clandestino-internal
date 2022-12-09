import HeaderBar from '../components/HeaderBar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};

export default Layout;
