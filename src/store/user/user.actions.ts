import { createAppAsyncThunk } from '../../store';
import { filmsActions, filmsSelectors, filmsUtils } from '../films';
import { userSelectors } from './user.selectors';
import { userUtils } from './user.utils';
import { User } from '../../types/user.interface';
import { FilmCard } from '../../types/filmCard.interface';


const login = createAppAsyncThunk('user/login',
  async (userName: string, { dispatch }): Promise<User> => {
    const foundUser = userUtils.getUser(userName);

    dispatch(
      filmsActions.setLoadedDefaultFilms(filmsUtils.getFilms() ?? [])
    );
    
    if (!foundUser) {
      userUtils.loginUser(userName);
      return userUtils.addUser(userName);
    };

    userUtils.loginUser(userName);
    return foundUser;
  }
);

const logout = createAppAsyncThunk('user/logout',
  async (_, { extra }): Promise<void> => {
    userUtils.logoutUser();
    await extra.router.navigate('/');
  }
);

const toggleFavorite = createAppAsyncThunk('user/toggleFavorite',
  async (filmId: string, { dispatch, getState }): Promise<FilmCard[]> => {

    const userName = userSelectors.selectUserName(getState());

    if (!userName) {
      throw new Error('No auth data! You need to sign in!');
    };

    const film = 
      filmsSelectors.selectFilm(getState(), filmId)
      ?? userUtils.getFavoriteFilm(userName, filmId);

    if (!film) {
      throw new Error('No film data');
    };

    dispatch(filmsActions.addFilmToCache(film));

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