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

const { loadDefaultFilms, loadFilmByQuery, addFilmToCache, deleteFilmsData } = filmsActions;

export const filmsReducer = createReducer<FilmsState>(
  initialState,
  (builder) => {

    builder.addCase(deleteFilmsData, () => initialState);

    builder.addCase(addFilmToCache, (state, { payload }) => state.cache[payload.id] ? state : ({
      ...state,
      cache: {
        ...state.cache,
        [payload.id]: payload
      }
    }));

    builder.addCase(loadDefaultFilms.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload,
      loading: false,
      error: undefined
    }));

    builder.addCase(loadDefaultFilms.pending, (state) => ({
      ...state,
      loading: true,
      error: undefined
    }));

    builder.addCase(loadDefaultFilms.rejected, (state, { payload }) => ({
      ...state,
      data: [],
      loading: false,
      error: payload as string
    }));

    builder.addCase(loadFilmByQuery.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload,
      loading: false,
      error: undefined
    }));

    builder.addCase(loadFilmByQuery.pending, (state) => ({
      ...state,
      loading: true,
      error: undefined
    }));

    builder.addCase(loadFilmByQuery.rejected, (state, { payload }) => ({
      ...state,
      data: [],
      loading: false,
      error: payload as string
    }));
  }
);