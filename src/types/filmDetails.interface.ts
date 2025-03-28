import { IReview } from './review.interface';

export interface IFilmDetails {
  id: string,
  title: string,
  description: string,
  image: string,
  rating: number,
  type: string,
  date: string,
  duration: number,
  genre: string[],
  review: IReview
};