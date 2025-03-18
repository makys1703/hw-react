import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import { RequireAuth } from '../../hoc/RequireAuth';
import { Fallback } from '../../components/Fallback/Fallback';
import { ErrorPage, FETCHING_DATA_ERROR } from '../ErrorPage';


const LazyFavoritesPage = lazy(() => import('./FavoritesPage'));

const element = (
  <Suspense fallback={<Fallback />}>
    <RequireAuth>
      <LazyFavoritesPage />
    </RequireAuth>
  </Suspense>
);

export const favoritesPageRoute: RouteObject = {
  path: '/favorites',
  element,
  errorElement: <ErrorPage text={FETCHING_DATA_ERROR} />
};