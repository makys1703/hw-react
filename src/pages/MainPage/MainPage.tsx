import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { filmsSelectors } from '../../store/films';
import { PageHeading } from '../../modules/PageHeading';
import { SearchForm } from './modules/SearchForm';
import { FilmList } from '../../modules/FilmList';
import { Paragraph } from '../../components/Paragraph';
import { Wrapper } from '../../components/Wrapper';


export function MainPage() {
  const films = useAppSelector(filmsSelectors.selectFilms);

  return (
    <>
      <PageHeading title='Поиск'>
        <Paragraph variant='small'>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
      </PageHeading>
      <SearchForm />
      <Wrapper style={{ paddingTop: 80, paddingBottom: 58 }}>
        <FilmList films={films} />
      </Wrapper>
    </>
  );
}

export default MainPage;
