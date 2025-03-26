import { createReducer } from '@reduxjs/toolkit';
import { filmDetailsActions } from './filmDetails.actions';
import { IFilmDetails } from '../../types/filmDetails.interface';


type FilmDetailsState = IFilmDetails | null;

const { setLoadedFilmDetails } = filmDetailsActions;

export const filmDetailsReducer = createReducer<FilmDetailsState>(
  null,
  (builder) => {
    builder.addCase(setLoadedFilmDetails, (_, { payload }) => payload);
  }
);