import { FilmResponseDescription } from '../../../../types/filmResponse.interface';
import { FilmCard } from '../../../../types/film.interface';


export const filterFilms = (film: FilmResponseDescription) => !!film['#IMG_POSTER']?.trim();

export const sortFilms = (a: FilmResponseDescription, b: FilmResponseDescription) => b['#RANK'] - a['#RANK'];

export const mapFilms = (film: FilmResponseDescription): FilmCard => ({
  id: film['#IMDB_ID'].slice(2),
  title: film['#TITLE'],
  rating: film['#RANK'],
  image: film['#IMG_POSTER']!
});