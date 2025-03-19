import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { RequireAuth } from '../hoc/RequireAuth';
import { MainLayout } from '../layouts/MainLayout';
import { Fallback } from '../components/Fallback/Fallback';
import { ErrorPage, FETCHING_DATA_ERROR, NOT_FOUND_ERROR } from '../pages/ErrorPage';
import { MainPageLoader } from '../pages/MainPage/MainPage.loader';
import { FilmPageLoader } from '../pages/FilmPage/FilmPage.loader';


const LazyMainPage = lazy(() => import('../pages/MainPage/MainPage'));
const LazyFavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));
const LazyLoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const LazyFilmPage = lazy(() => import('../pages/FilmPage/FilmPage'));

const mainPageElement = (
  <Suspense fallback={<Fallback />}>
    <RequireAuth>
      <LazyMainPage />
    </RequireAuth>
  </Suspense>
);

const favoritesPageElement = (
  <Suspense fallback={<Fallback />}>
    <RequireAuth>
      <LazyFavoritesPage />
    </RequireAuth>
  </Suspense>
);

const loginPageElement = (
  <Suspense fallback={<Fallback />}>
    <LazyLoginPage />
  </Suspense>
);

const filmPageElement = (
  <Suspense fallback={<Fallback />}>
    <RequireAuth>
      <LazyFilmPage />
    </RequireAuth>
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: mainPageElement,
        loader: MainPageLoader,
        errorElement: <ErrorPage text={FETCHING_DATA_ERROR} />
      },
      {
        path: '/favorites',
        element: favoritesPageElement,
        errorElement: <ErrorPage text={FETCHING_DATA_ERROR} />
      },
      {
        path: '/login',
        element: loginPageElement,
        errorElement: <ErrorPage text={NOT_FOUND_ERROR} />
      },
      {
        path: '/movie/:id',
        element: filmPageElement,
        loader: FilmPageLoader,
        errorElement: <ErrorPage text={FETCHING_DATA_ERROR} />
      },
      {
        path: '*',
        element: <ErrorPage text={NOT_FOUND_ERROR} />
      }
    ]
  }
]);