import { useLoaderData } from 'react-router';
import { useScrollReset } from '../../hooks/useScrollReset.hook';
import { FilmDetails } from './modules/FilmDetails';
import { FilmReview } from './modules/FilmReview';
import { IFilmDetails } from '../../types/filmDetails.interface';


export function FilmPage() {
  const data = useLoaderData() as IFilmDetails;

  useScrollReset();

  return (
    <>
      <FilmDetails data={data} />
      <FilmReview review={data.review} />
    </>
  );
};