import { createAction } from '@reduxjs/toolkit';
import { IFilmDetails } from '../../types/filmDetails.interface';


const setLoadedFilmDetails = createAction<IFilmDetails>('filmDetails/setLoadedFilmDetails');

export const filmDetailsActions = {
  setLoadedFilmDetails
};