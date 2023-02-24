import React from 'react';
import ProgramList from '../../components/ProgramList';
import Filter from '../../components/Filter';

import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function ProgramPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

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
