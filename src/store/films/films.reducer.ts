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

const { setLoadedDefaultFilms, loadFilmByQuery, addFilmToCache } = filmsActions;

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

    builder.addCase(addFilmToCache, (state, { payload }) => state.cache[payload.id] ? state : ({
      ...state,
      cache: {
        ...state.cache,
        [payload.id]: payload
      }
    }));

    builder.addCase(loadFilmByQuery.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload,
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