import Filter from '../../components/Filter';
// import MusicList from '../../components/MusicList/MusicList';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

const MusicList = lazy(() => import('../../components/MusicList'));

export default function MusicPage() {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <Suspense fallback={<Loader />}></Suspense>
      <Filter />
      <MusicList />
    </>
  );
}
