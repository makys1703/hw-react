import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { useAppDispatch } from '../../hooks/useAppDispatch.hook';
import { userActions, userSelectors, userUtils } from '../../store/user';


export function RequireAuth({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();

  const storeAuth = useAppSelector(userSelectors.selectAuth);
  const localStorageAuth = userUtils.isAuth();

  if (localStorageAuth && !storeAuth) {
    dispatch(userActions.login(userUtils.getLoginName()!));
  };

  const isAuth = storeAuth || localStorageAuth;
  
  if (!isAuth) {
    return <Navigate to='/login' replace/>;
  }

  return children;
};