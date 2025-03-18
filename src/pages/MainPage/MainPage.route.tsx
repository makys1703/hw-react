import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import { RequireAuth } from '../../hoc/RequireAuth';
import { MainPageLoader } from './MainPage.loader';
import { Fallback } from '../../components/Fallback/Fallback';
import { ErrorPage, FETCHING_DATA_ERROR } from '../ErrorPage';


const LazyMainPage = lazy(() => import('./MainPage'));

const element = (
  <Suspense fallback={<Fallback />}>
    <RequireAuth>
      <LazyMainPage />
    </RequireAuth>
  </Suspense>
);

export const mainPageRoute: RouteObject = {
  path: '/',
  element,
  loader: MainPageLoader,
  errorElement: <ErrorPage text={FETCHING_DATA_ERROR} />
};