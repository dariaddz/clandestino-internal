import Search from '../../components/Search';
import MusicList from '../../components/MusicList/MusicList';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MusicPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <Search />
      <MusicList />
    </>
  );
}
