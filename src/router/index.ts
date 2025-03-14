import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { FilmPage } from '../pages/FilmPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { NotFoundPage } from '../pages/NotFoundPage';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: MainPage
      },
      {
        path: '/login',
        Component: LoginPage
      },
      {
        path: '/movie/:id',
        Component: FilmPage
      },
      {
        path: '/favorites',
        Component: FavoritesPage
      },
      {
        path: '*',
        Component: NotFoundPage
      }
    ]
  }
]);