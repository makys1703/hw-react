import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import { Fallback } from '../../components/Fallback/Fallback';
import { ErrorPage, NOT_FOUND_ERROR } from '../ErrorPage';


const LazyFilmPage = lazy(() => import('./LoginPage'));

const element = (
  <Suspense fallback={<Fallback />}>
    <LazyFilmPage />
  </Suspense>
);

export const loginPageRoute: RouteObject = {
  path: '/login',
  element,
  errorElement: <ErrorPage text={NOT_FOUND_ERROR} />
};