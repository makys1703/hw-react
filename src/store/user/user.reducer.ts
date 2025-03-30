import { createReducer } from '@reduxjs/toolkit';
import { userActions } from './user.actions';
import { User } from '../../types/user.interface';


export type UserState = User | null;

const { login, logout, toggleFavorite } = userActions;

export const userReducer = createReducer<UserState>(
  null,
  (builder) => {
    builder.addCase(login.fulfilled, (_, { payload }) => payload);

    builder.addCase(logout.fulfilled, () => null);

    builder.addCase(toggleFavorite.fulfilled, (state, { payload }) => !state ? state : ({
      ...state,
      favorites: payload
    }));

    builder.addCase(toggleFavorite.rejected, (state, { payload }) => {
      console.error(payload);
      return state;
    });
  }
);