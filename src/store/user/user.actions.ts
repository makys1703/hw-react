import { createAction } from '@reduxjs/toolkit';
import { User } from '../../types/user.interface';


const loginUser = createAction<User>('user/login');
const logoutUser = createAction('user/logout');

export const userActions = {
  loginUser,
  logoutUser
};