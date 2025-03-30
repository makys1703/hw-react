import { createAppSelector, rootSelector } from '../../store';
import { FilmCard } from '../../types/filmCard.interface';


const selectUserName = createAppSelector(
  rootSelector,
  (state) => state.user?.name
);

const selectAuth = createAppSelector(
  rootSelector,
  (state) => !!state.user?.name
);

const selectFavorites = createAppSelector(
  rootSelector,
  (state) => state.user?.favorites
);

const selectFavoriteStatus = createAppSelector(
  [
    selectFavorites,
    (_, filmId: string) => filmId
  ],
  (favorites: FilmCard[] | undefined, filmId) => 
    favorites 
      ? !!favorites.find(({ id }) => id === filmId) 
      : false
);

export const userSelectors = {
  selectUserName,
  selectAuth,
  selectFavorites,
  selectFavoriteStatus
};