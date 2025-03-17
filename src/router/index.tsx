import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { MainPageLoader } from '../pages/MainPage/MainPage.loader';
import { FilmPageLoader } from '../pages/FilmPage';
import { ErrorPage, FETCHING_DATA_ERROR, NOT_FOUND_ERROR } from '../pages/ErrorPage';


const LazyMainPage = lazy(() => import('../pages/MainPage'));
const LazyLoginPage = lazy(() => import('../pages/LoginPage'));
const LazyFilmPage = lazy(() => import('../pages/FilmPage'));
const LazyFavoritesPage = lazy(() => import('../pages/FavoritesPage'));

const Fallback = <>Загрузка...</>;

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        element: <Suspense fallback={Fallback}><LazyMainPage /></Suspense>,
        loader: MainPageLoader,
        errorElement: <ErrorPage text={FETCHING_DATA_ERROR} />
      },
      {
        path: '/login',
        element: <Suspense fallback={Fallback}><LazyLoginPage /></Suspense>
      },
      {
        path: '/movie/:id',
        element: <Suspense fallback={Fallback}><LazyFilmPage /></Suspense>,
        loader: FilmPageLoader,
        errorElement: <ErrorPage text={FETCHING_DATA_ERROR} />
      },
      {
        path: '/favorites',
        element: <Suspense fallback={Fallback}><LazyFavoritesPage /></Suspense>
      },
      {
        path: '*',
        element: <ErrorPage text={NOT_FOUND_ERROR} />
      }
    ]
  }
]);