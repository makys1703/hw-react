import { useParams } from 'react-router';
import { FilmDetails } from './modules/FilmDetails';
import { FilmReviews } from './modules/FilmReviews';
import { useScrollReset } from '../../hooks/useScrollReset.hook';
import { filmsData } from '../../store/films';


export function FilmPage() {
  const { id } = useParams();
  const filmProps = filmsData.find(f => f.id === id);

  useScrollReset();

  return (
    <>
      <FilmDetails {...filmProps!} />
      <FilmReviews />
    </>
  );
}
