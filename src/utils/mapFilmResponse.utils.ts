import { FilmCard } from '../types/film.interface';
import { IFilmDetails } from '../types/filmDetails.interface';
import { FilmDetailsResponse } from '../types/filmDetailsResponse.interface';


const UNDEFINED_TEXT = 'Информация отсутствует';

export const mapFilmDetailsResponse = ({ short, top }: FilmDetailsResponse): IFilmDetails => {

  const duration = top?.runtime?.seconds ? Math.ceil(top.runtime.seconds / 60): 0;

  return {
    title: short.name ?? UNDEFINED_TEXT,
    rating: short.aggregateRating.ratingValue ?? 0,
    image: short.image ?? '',
    description: short.description ?? UNDEFINED_TEXT,
    type: short['@type'] ?? UNDEFINED_TEXT,
    date: short.datePublished ?? UNDEFINED_TEXT,
    duration,
    genre: short.genre ?? UNDEFINED_TEXT,
    review: {
      title: short.review.name ?? UNDEFINED_TEXT,
      text: short.review.reviewBody ?? UNDEFINED_TEXT,
      date: short.review.dateCreated ?? ''
    }
  };
};

export const mapFilmCardResponse = ({ short, imdbId }: FilmDetailsResponse): FilmCard => {
  return {
    id: imdbId.slice(2),
    title: short.name ?? UNDEFINED_TEXT,
    rating: short.aggregateRating.ratingValue ?? 0,
    image: short.image ?? ''
  };
};

