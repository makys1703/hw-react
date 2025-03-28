import { createAction } from '@reduxjs/toolkit';
import { filmCardsApi } from '../../api/filmCards';
import { filmDetailsApi } from '../../api/filmDetails';
import { createAppAsyncThunk } from '..';
import { filmsSelectors } from './films.selectors';
import { filmsUtils } from './films.utils';
import { mapFilmCardResponse } from '../../utils/mapFilmResponse.utils';
import { FilmError } from './films.constants';
import { FilmCard } from '../../types/filmCard.interface';


const { responseMapper } = filmsUtils;

const deleteFilmsData = createAction('films/deleteFilmsData');

const addFilmToCache = createAction<FilmCard>('films/addFilmToCache');

const loadDefaultFilms = createAppAsyncThunk(
  'films/loadDefaultFilms',
  async (_, { getState, rejectWithValue }): Promise<FilmCard[]> => {

    const storeFilms = filmsSelectors.selectFilms(getState());
    const localStorageFilms = filmsUtils.getFilms();
    
    if (localStorageFilms && !storeFilms.length) {  
      return localStorageFilms;
    }
    
    if (storeFilms.length) {
      return storeFilms;
    };

    try {
      const responses = filmsUtils.defaultFilmIds.map((id) => filmDetailsApi.getFilmDetailsById(id));
      const awaitedData = await Promise.all(responses);

      const defaultFilms = awaitedData.map(({ data, error }) => {
        if (error || !data) {
          throw new Error(error);
        }
        return mapFilmCardResponse(data);
      });

      filmsUtils.setFilms(defaultFilms);
      return defaultFilms;
    } catch {
      throw rejectWithValue(FilmError.loading);
    }
  }
);

const loadFilmByQuery = createAppAsyncThunk(
  'films/loadFilmsByQuery',
  async (query: string, { rejectWithValue }): Promise<FilmCard[]> => {
    try {
      const { data, error } = await filmCardsApi.getFilmCardsByQuery(query);

      if (error) {
        throw new Error(error);
      }

      if (!data) {
        return [];
      }

      return data.description
        .filter(responseMapper.filterFilms)
        .sort(responseMapper.sortFilms)
        .slice(0, 12)
        .map(responseMapper.mapFilms);

    } catch {
      throw rejectWithValue(FilmError.loading);
    }
  }
);

export const filmsActions = {
  loadDefaultFilms,
  deleteFilmsData,
  addFilmToCache,
  loadFilmByQuery
};