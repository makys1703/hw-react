import { createAction } from '@reduxjs/toolkit';
import { api } from '../../api';
import { createAppAsyncThunk } from '..';
import { filmsUtils } from './films.utils';
import { FilmCard } from '../../types/filmCard.interface';

const { responseMapper } = filmsUtils;

const setLoadedDefaultFilms = createAction<FilmCard[]>('films/setLoadedDefaultFilms');

const addFilmToCache = createAction<FilmCard>('films/addFilmToCache');

const loadFilmByQuery = createAppAsyncThunk(
  'films/loadFilmsByQuery',
  async (query: string): Promise<FilmCard[]> => {
    const { data } = await api.getFilmCardsByQuery(query);

    if (!data) {
      throw new Error('Film loading error!');
    }

    return data.description
      .filter(responseMapper.filterFilms)
      .sort(responseMapper.sortFilms)
      .slice(0, 12)
      .map(responseMapper.mapFilms);
  }
);

export const filmsActions = {
  setLoadedDefaultFilms,
  loadFilmByQuery,
  addFilmToCache
};