import { FilmCardsResponseDescription } from '../../../../types/filmCardsResponse.interface';
import { FilmCard } from '../../../../types/filmCard.interface';


export const filterFilms = (film: FilmCardsResponseDescription) => !!film['#IMG_POSTER']?.trim();

export const sortFilms = (a: FilmCardsResponseDescription, b: FilmCardsResponseDescription) => b['#RANK'] - a['#RANK'];

export const mapFilms = (film: FilmCardsResponseDescription): FilmCard => ({
  id: film['#IMDB_ID'].slice(2),
  title: film['#TITLE'],
  rating: film['#RANK'],
  image: film['#IMG_POSTER']!
});