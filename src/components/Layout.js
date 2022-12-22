import HeaderBar from '../components/HeaderBar';
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
const Layout = () => {
  return (
    <>
      <HeaderBar />

      <Suspense
        fallback={
          <div>Загружжжжжжаем....</div>
          // <Loader />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
