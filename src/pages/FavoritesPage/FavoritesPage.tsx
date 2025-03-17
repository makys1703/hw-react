import { FilmList } from '../../modules/FilmList';
import { PageHeading } from '../../modules/PageHeading';
import { Wrapper } from '../../components/Wrapper';
import { FilmCard } from '../../types/film.interface';
import { Paragraph } from '../../components/Paragraph';


const films: FilmCard[] = [];


export function FavoritesPage() {
  return (
    <>
      <PageHeading title='Избранное' />
      <Wrapper style={{ paddingTop: 40, paddingBottom: 58 }}>
        { films.length 
          ? <FilmList films={films}/>
          : <Paragraph>Упс... Ничего не найдено</Paragraph>
        }
      </Wrapper>
    </>
  );
}