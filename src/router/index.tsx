import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { RequireAuth } from '../hoc/RequireAuth';
import { MainLayout } from '../layouts/MainLayout';
import { Fallback } from '../components/Fallback/Fallback';
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { MainPageLoader } from '../pages/MainPage/MainPage.loader';
import { FilmPageLoader } from '../pages/FilmPage/FilmPage.loader';
import { ErrorPage, PageError } from '../pages/ErrorPage';


const LazyFavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));
const LazyFilmPage = lazy(() => import('../pages/FilmPage/FilmPage'));

const mainPageElement = (
  <RequireAuth>
    <MainPage />
  </RequireAuth>
);

const favoritesPageElement = (
  <Suspense fallback={<Fallback />}>
    <RequireAuth>
      <LazyFavoritesPage />
    </RequireAuth>
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
        errorElement: <ErrorPage text={PageError.fetching} />
      },
      {
        path: '/favorites',
        element: favoritesPageElement,
        errorElement: <ErrorPage text={PageError.fetching} />
      },
      {
        path: '/login',
        element: <LoginPage />,
        errorElement: <ErrorPage text={PageError.pageNotFound} />
      },
      {
        path: '/movie/:id',
        element: filmPageElement,
        loader: FilmPageLoader,
        errorElement: <ErrorPage text={PageError.fetching} />
      },
      {
        path: '*',
        element: <ErrorPage text={PageError.pageNotFound} />
      }
    ]
  }
]);