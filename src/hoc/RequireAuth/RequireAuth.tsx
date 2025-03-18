import { useContext, PropsWithChildren } from 'react';
import { UserContext, UserContextData } from '../../context/User/user.context';
import { Navigate } from 'react-router';

export function RequireAuth({ children }: PropsWithChildren) {
  const { userData } = useContext(UserContext) as UserContextData;

  if (!userData) {
    return <Navigate to='/login' replace/>;
  }

  return children;
};