import { createAppAsyncThunk } from '../../store';
import { filmsActions, filmsSelectors } from '../films';
import { userSelectors } from './user.selectors';
import { userUtils } from './user.utils';
import { User } from '../../types/user.interface';
import { FilmCard } from '../../types/filmCard.interface';
import { UserError } from './user.constants';


const login = createAppAsyncThunk('user/login',
  async (userName: string): Promise<User> => {
    const foundUser = userUtils.getUser(userName);
    
    if (!foundUser) {
      userUtils.loginUser(userName);
      return userUtils.addUser(userName);
    };

    userUtils.loginUser(userName);
    return foundUser;
  }
);

const logout = createAppAsyncThunk('user/logout',
  async (_, { dispatch, extra }): Promise<void> => {
    dispatch(filmsActions.deleteFilmsData());
    userUtils.logoutUser();
    await extra.router.navigate('/login');
  }
);

const toggleFavorite = createAppAsyncThunk('user/toggleFavorite',
  async (filmId: string, { dispatch, getState }): Promise<FilmCard[]> => {

    const userName = userSelectors.selectUserName(getState());

    if (!userName) {
      throw new Error(UserError.noAuth);
    };

    const film = 
      filmsSelectors.selectFilm(getState(), filmId)
      ?? userUtils.getFavoriteFilm(userName, filmId);

    if (!film) {
      throw new Error(UserError.noFilmData);
    };

    dispatch(filmsActions.addFilmToCache(film));

    const data = userUtils.toggleFavoriteFilm(userName, film);

    if (!data) {
      throw new Error(UserError.addToFavorite);
    };

    return data.favorites;
  }
);

export const userActions = {
  login,
  logout,
  toggleFavorite
};