import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { mainPageRoute } from '../pages/MainPage';
import { favoritesPageRoute } from '../pages/FavoritesPage';
import { loginPageRoute } from '../pages/LoginPage';
import { filmPageRoute } from '../pages/FilmPage';
import { ErrorPage, NOT_FOUND_ERROR } from '../pages/ErrorPage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      mainPageRoute,
      favoritesPageRoute,
      loginPageRoute,
      filmPageRoute,
      {
        path: '*',
        element: <ErrorPage text={NOT_FOUND_ERROR} />
      }
    ]
  }
]);