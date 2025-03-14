import { FilmList } from '../../modules/FilmList';
import { PageHeading } from '../../modules/PageHeading';
import { Wrapper } from '../../components/Wrapper';
import { filmsData } from '../../store/films';
import { Film } from '../../types/film.interface';


const films: Film[] = [
  filmsData[0],
  filmsData[3]
];

export function FavoritesPage() {
  return (
    <>
      <PageHeading title='Избранное' />
      <Wrapper style={{ paddingTop: 40, paddingBottom: 58 }}>
        <FilmList films={films}/>
      </Wrapper>
    </>
  );
}