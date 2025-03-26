import { createAppAsyncThunk } from '../../store';
import { userSelectors } from './user.selectors';
import { filmsSelectors } from '../films';
import { userUtils } from './user.utils';
import { User } from '../../types/user.interface';
import { FilmCard } from '../../types/filmCard.interface';


const login = createAppAsyncThunk('user/login',
  async (userName: string, thunkApi): Promise<User> => {
    const foundUser = userUtils.getUser(userName);

    await thunkApi.extra.router.navigate('/');

    if (!foundUser) {
      userUtils.loginUser(userName);
      return userUtils.addUser(userName);
    };

    userUtils.loginUser(userName);
    return foundUser;
  }
);

const logout = createAppAsyncThunk('user/logout',
  async (_, thunkApi): Promise<void> => {
    userUtils.logoutUser();
    await thunkApi.extra.router.navigate('/');
  }
);

const toggleFavorite = createAppAsyncThunk('user/toggleFavorite',
  async (filmId: string, { getState }): Promise<FilmCard[]> => {

    if (!filmId) {
      throw new Error('No film id');
    }

    const userName = userSelectors.selectUserName(getState());

    if (!userName) {
      throw new Error('No username');
    };

    const film = 
      filmsSelectors.selectFilm(getState(), filmId) 
      ?? userUtils.getFavoriteFilm(userName, filmId);

    if (!film) {
      throw new Error('No film data');
    };

    const data = userUtils.toggleFavoriteFilm(userName, film);

    if (!data) {
      throw new Error('No user data');
    };

    return data.favorites;
  }
);

export const userActions = {
  login,
  logout,
  toggleFavorite
};