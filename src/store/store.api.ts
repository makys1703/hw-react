import { createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { store, extraArgument } from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const createAppSelector = createSelector.withTypes<RootState>();

export const rootSelector = (state: RootState) => state;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
}>();
