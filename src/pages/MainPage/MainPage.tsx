import { PageHeading } from '../../modules/PageHeading';
import { SearchForm } from './modules/SearchForm';
import { FilmList } from '../../modules/FilmList';
import { Paragraph } from '../../components/Paragraph';
import { Wrapper } from '../../components/Wrapper';
import { filmsData } from '../../store/films';


export function MainPage() {
  return (
    <>
      <PageHeading title='Поиск'>
        <Paragraph variant='small'>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
      </PageHeading>
      <SearchForm />
      <Wrapper style={{ paddingTop: 80, paddingBottom: 58 }}>
        <FilmList films={filmsData} />
      </Wrapper>
    </>
  );
}
