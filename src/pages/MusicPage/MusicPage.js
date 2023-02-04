import Filter from '../../components/Filter';
import MusicList from '../../components/MusicList/MusicList';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MusicPage() {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();
  // const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <Filter />
      <MusicList />
    </>
  );
}
