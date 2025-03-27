import { useScrollReset } from '../../hooks/useScrollReset.hook';
import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { filmDetailsSelectors } from '../../store/filmDetails';
import { FilmDetails } from './modules/FilmDetails';
import { FilmReview } from './modules/FilmReview';
import { Paragraph } from '../../components/Paragraph';


export function FilmPage() {
  const data = useAppSelector(filmDetailsSelectors.selectFilmDetails);

  useScrollReset();

  return (
    <>
      {data ? (
        <>
          <FilmDetails data={data} />
          <FilmReview review={data.review} />
        </>
      ) : (
        <Paragraph>Не удалось загрузить данные</Paragraph>
      )}
    </>
  );
}

export default FilmPage;
