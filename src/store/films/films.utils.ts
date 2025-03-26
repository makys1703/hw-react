import { FilmCard } from '../../types/filmCard.interface';

const LOCALSTORAGE_KEY = 'films';

export const defaultFilmIds = ['3480822', '9376612', '9140554', '0460649', '6468322', '0108778', '0898266', '0369179'];

const getFilms = (): FilmCard[] | null => {
  const films = localStorage.getItem(LOCALSTORAGE_KEY);

  if (!films) {
    return null;
  };

  return JSON.parse(films);
};

const setFilms = (films: FilmCard[]): void => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(films));
};

export const filmsUtils = {
  getFilms,
  setFilms,
  defaultFilmIds
};