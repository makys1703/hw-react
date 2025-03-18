import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { PageHeading } from '../../modules/PageHeading';
import { SearchForm } from './modules/SearchForm';
import { FilmList } from '../../modules/FilmList';
import { Paragraph } from '../../components/Paragraph';
import { Wrapper } from '../../components/Wrapper';
import { FilmCard } from '../../types/film.interface';


export function MainPage() {
  const [films, setFilms] = useState<FilmCard[]>([]);

  const data = useLoaderData() as FilmCard[];

  useEffect(() => {
    const initialFilms: FilmCard[] = data.length > 0 ? data : [];
    setFilms(initialFilms);
  }, [data]);

  return (
    <>
      <PageHeading title='Поиск'>
        <Paragraph variant='small'>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
      </PageHeading>
      <SearchForm setFilms={setFilms}/>
      <Wrapper style={{ paddingTop: 80, paddingBottom: 58 }}>
        <FilmList films={films} />
      </Wrapper>
    </>
  );
}

export default MainPage;
