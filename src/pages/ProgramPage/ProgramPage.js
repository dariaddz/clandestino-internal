import React from 'react';
import ProgramList from '../../components/ProgramList';
import Filter from '../../components/Filter';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ProgramPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <Filter />
      <ProgramList />
    </>
  );
}
