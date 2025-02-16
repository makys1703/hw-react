import { MainLayout } from '../../layouts/MainLayout';
import { PageHeading } from '../../modules/PageHeading';
import { SearchForm } from './modules/SearchForm';
import { FilmList } from '../../modules/FilmList';
import { Paragraph } from '../../components/Paragraph';
import { filmsData } from '../../store/films';


export function MainPage() {
  return (
    <MainLayout>
      <PageHeading title='Поиск'>
        <Paragraph variant='small'>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
      </PageHeading>
      <SearchForm />
      <FilmList films={filmsData} />
    </MainLayout>
  );
}
