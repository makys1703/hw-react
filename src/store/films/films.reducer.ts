import { createReducer } from '@reduxjs/toolkit';
import { filmsActions } from './films.actions';
import { FilmCard } from '../../types/filmCard.interface';


interface FilmsState {
  data: FilmCard[],
  cache: Record<string, FilmCard>,
  loading: boolean,
  error?: string
};

const initialState: FilmsState = {
  data: [],
  cache: {},
  loading: false
};

const { setLoadedDefaultFilms, loadFilmByQuery } = filmsActions;

const cacheReducer = (data: Record<string, FilmCard>, item: FilmCard) => {
  if (data[item.id]) {
    return data;
  };

  data[item.id] = item;
  return data;
};

export const filmsReducer = createReducer<FilmsState>(
  initialState,
  (builder) => {

    builder.addCase(setLoadedDefaultFilms, (state, { payload }) => ({
      data: payload,
      cache: payload.reduce(cacheReducer, {...state.cache}),
      loading: false
    }));

    builder.addCase(loadFilmByQuery.fulfilled, (state, { payload }) => ({
      data: payload,
      cache: payload.reduce(cacheReducer, {...state.cache}),
      loading: false
    }));

    builder.addCase(loadFilmByQuery.pending, (state) => ({
      ...state,
      loading: true
    }));

    builder.addCase(loadFilmByQuery.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload as string
    }));
  }
);