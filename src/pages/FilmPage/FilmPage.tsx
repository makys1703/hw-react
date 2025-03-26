import { useScrollReset } from '../../hooks/useScrollReset.hook';
import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { filmDetailsSelectors } from '../../store/filmDetails';
import { FilmDetails } from './modules/FilmDetails';
import { FilmReview } from './modules/FilmReview';


export function FilmPage() {
  const data = useAppSelector(
    filmDetailsSelectors.selectFilmDetails
  );

  useScrollReset();

  return (
    <>
      <FilmDetails data={data!} />
      <FilmReview review={data!.review} />
    </>
  );
};

export default FilmPage;