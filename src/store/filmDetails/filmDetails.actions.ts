import { IFilmDetails } from '../../types/filmDetails.interface';
import { createAction } from '@reduxjs/toolkit';


const setLoadedFilmDetails = createAction<IFilmDetails>('filmDetails/setLoadedFilmDetails');

export const filmDetailsActions = {
  setLoadedFilmDetails
};