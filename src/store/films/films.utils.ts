import { FilmCard } from '../../types/filmCard.interface';
import { FilmCardsResponseDescription } from '../../types/filmCardsResponse.interface';

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

const filterFilms = (film: FilmCardsResponseDescription) => !!film['#IMG_POSTER']?.trim();

const sortFilms = (a: FilmCardsResponseDescription, b: FilmCardsResponseDescription) => b['#RANK'] - a['#RANK'];

const mapFilms = (film: FilmCardsResponseDescription): FilmCard => ({
  id: film['#IMDB_ID'].slice(2),
  title: film['#TITLE'],
  rating: film['#RANK'],
  image: film['#IMG_POSTER']!
});

export const filmsUtils = {
  getFilms,
  setFilms,
  defaultFilmIds,
  responseMapper: {
    filterFilms,
    sortFilms,
    mapFilms
  }
};