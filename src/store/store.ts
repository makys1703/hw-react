import { configureStore } from '@reduxjs/toolkit';
import { router } from '../router';
import { userReducer } from './user';
import { filmsReducer } from './films';
import { filmDetailsReducer } from './filmDetails';


export const extraArgument = {
  router
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    films: filmsReducer,
    filmDetails: filmDetailsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument
      }
    })
});

