import { RootState } from '../';


const selectUser = (state: RootState) => state.user;

export const userSelectors = {
  selectUser
};