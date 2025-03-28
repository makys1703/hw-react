import { FilmCard } from '../../types/filmCard.interface';
import { User } from '../../types/user.interface';
import { UserError } from './user.constants';


type UsersCache = Record<string, User>;

const LOCALSTORAGE_USERS_KEY = 'users';
const LOCALSTORAGE_LOGIN_KEY = 'login';

const getUsers = (): UsersCache | null => {
  const data = localStorage.getItem(LOCALSTORAGE_USERS_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
};

const setUser = (name: string, data: User): void => {

  const exists = getUser(name);

  if (exists) {
    throw new Error(UserError.alreadyExists);
  }

  const users = getUsers() ?? {};

  localStorage.setItem(LOCALSTORAGE_USERS_KEY, JSON.stringify({
    ...users,
    [name]: data
  }));
};

const patchUser = (name: string, data: Partial<User>): void => {

  const user = getUser(name);

  if (!user) {
    throw new Error(UserError.notFound);
  };

  const users = getUsers() ?? {};

  localStorage.setItem(LOCALSTORAGE_USERS_KEY, JSON.stringify({
    ...users,
    [name]: {
      ...user,
      ...data
    }
  }));
};

const getUser = (name: string): User | null => {
  const users = getUsers();

  if (!users || !users[name]) {
    return null;
  };

  return users[name];
};

const getFavoriteFilm = (name: string, filmId: string) => {
  const user = getUser(name);

  if (!user) {
    return null;
  };

  const foundFilm = user.favorites.find((film) => film.id === filmId);

  if (!foundFilm) {
    return null;
  };

  return foundFilm;
};

const addUser = (name: string): User => {
  const user: User = {
    name,
    favorites: []
  };

  setUser(user.name, user);

  return user;
};

const loginUser = (name: string): void => {
  localStorage.setItem(LOCALSTORAGE_LOGIN_KEY, name);
};

const logoutUser = (): void => {
  localStorage.removeItem(LOCALSTORAGE_LOGIN_KEY);
};

const isAuth = (): boolean => {
  return !!localStorage.getItem(LOCALSTORAGE_LOGIN_KEY);
};

const getLoginName = (): string | null => {
  return localStorage.getItem(LOCALSTORAGE_LOGIN_KEY) ?? null;
};

const toggleFavoriteFilm = (userName: string, film: FilmCard): User | null => {

  const user = getUser(userName);

  if (!user) {
    return null;
  }

  const foundFilm = user.favorites.find(({ id }) => id === film.id);

  if (!foundFilm) {
    user.favorites.push(film);
  } else {
    user.favorites = user.favorites.filter(({ id }) => id !== film.id);
  }

  patchUser(user.name, user);

  return user;
};

export const userUtils = {
  getUser,
  addUser,
  loginUser,
  logoutUser,
  isAuth,
  getLoginName,
  toggleFavoriteFilm,
  getFavoriteFilm
};