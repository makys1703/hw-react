import { createReducer } from '@reduxjs/toolkit';
import { User } from '../../types/user.interface';
import { userActions } from './user.actions';


type UserState = User | null;

const { loginUser, logoutUser } = userActions;

export const userReducer = createReducer<UserState>(
  null,
  (builder) => {
    builder.addCase(loginUser, (_, { payload }) => payload);
    builder.addCase(logoutUser, () => null);
  }
);