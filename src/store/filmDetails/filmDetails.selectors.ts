import { createSelector } from '@reduxjs/toolkit';
import { rootSelector } from '../store.api';


const selectFilmDetails = createSelector(
  rootSelector,
  (state) => state.filmDetails
);

export const filmDetailsSelectors = {
  selectFilmDetails
};