import { createAppSelector, rootSelector } from '../store.api';


const selectFilms = createAppSelector(
  rootSelector,
  (state) => state.films.data
);

const selectCachedFilms = createAppSelector(
  rootSelector,
  (state) => state.films.cache
);

const selectFilm = createAppSelector(
  [
    rootSelector,
    (_, id: string) => id
  ],
  (state, id) =>
    state.films.cache[id] ?? state.films.data.find((film) => film.id === id)
);

const selectFilmsLoading = createAppSelector(
  rootSelector,
  (state) => state.films.loading
);

const selectFilmsError = createAppSelector(
  rootSelector,
  (state) => state.films.error
);

export const filmsSelectors = {
  selectFilms,
  selectCachedFilms,
  selectFilm,
  selectFilmsLoading,
  selectFilmsError
};