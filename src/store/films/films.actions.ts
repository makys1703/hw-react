import { createAppAsyncThunk } from '..';
import { api } from '../../api';
import { filterFilms, mapFilms, sortFilms } from '../../pages/MainPage/modules/SearchForm/SearchForm.utils';
import { FilmCard } from '../../types/filmCard.interface';
import { createAction } from '@reduxjs/toolkit';


const setLoadedDefaultFilms = createAction<FilmCard[]>('films/loadDefaultFilms');

const loadFilmByQuery = createAppAsyncThunk(
  'films/loadFilmsByQuery',
  async (query: string): Promise<FilmCard[]> => {
    const { data } = await api.getFilmCardsByQuery(query);

    if (!data) {
      throw new Error('Film loading error!');
    }

    return data.description
      .filter(filterFilms)
      .sort(sortFilms)
      .slice(0, 12)
      .map(mapFilms);
  }
);

export const filmsActions = {
  setLoadedDefaultFilms,
  loadFilmByQuery
};