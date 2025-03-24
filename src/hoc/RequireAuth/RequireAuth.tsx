import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAppSelector } from '../../hooks/useAppSelector.hook';

export function RequireAuth({ children }: PropsWithChildren) {

  const userData = useAppSelector((state) => state.user);

  if (!userData) {
    return <Navigate to='/login' replace/>;
  }

  return children;
};