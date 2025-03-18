import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import { RequireAuth } from '../../hoc/RequireAuth';
import { FilmPageLoader } from './FilmPage.loader';
import { Fallback } from '../../components/Fallback/Fallback';
import { ErrorPage, FETCHING_DATA_ERROR } from '../ErrorPage';


const LazyFilmPage = lazy(() => import('./FilmPage'));

const element = (
  <Suspense fallback={<Fallback />}>
    <RequireAuth>
      <LazyFilmPage />
    </RequireAuth>
  </Suspense>
);

export const filmPageRoute: RouteObject = {
  path: '/movie/:id',
  element,
  loader: FilmPageLoader,
  errorElement: <ErrorPage text={FETCHING_DATA_ERROR} />
};