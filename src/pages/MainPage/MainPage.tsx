import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { filmsSelectors } from '../../store/films';
import { PageHeading } from '../../modules/PageHeading';
import { SearchForm } from './modules/SearchForm';
import { FilmList } from '../../modules/FilmList';
import { NotFound } from '../../modules/FilmList/components/NotFound';
import { Paragraph } from '../../components/Paragraph';
import { Wrapper } from '../../components/Wrapper';


export function MainPage() {
  const data = useAppSelector(filmsSelectors.selectFilms);
  const loading = useAppSelector(filmsSelectors.selectFilmsLoading);
  const error = useAppSelector(filmsSelectors.selectFilmsError);

  const showFilms = !error && !loading && Boolean(data.length);
  const showNotFound = !error && !loading && data.length === 0;
  const showLoading = !error && loading;

  return (
    <>
      <PageHeading title='Поиск'>
        <Paragraph variant='small'>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
      </PageHeading>
      <SearchForm />
      <Wrapper style={{ paddingTop: 80, paddingBottom: 58 }}>
        { showFilms && <FilmList films={data} />}
        { showNotFound && <NotFound /> }
        { showLoading && <Paragraph>Загрузка...</Paragraph> }
        { error && <Paragraph>{ error }</Paragraph> }
      </Wrapper>
    </>
  );
}

export default MainPage;
