import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { userSelectors } from '../../store/user';
import { FilmList } from '../../modules/FilmList';
import { PageHeading } from '../../modules/PageHeading';
import { Wrapper } from '../../components/Wrapper';
import { Paragraph } from '../../components/Paragraph';


export function FavoritesPage() {
  const favoriteFilms = useAppSelector(userSelectors.selectFavorites);

  return (
    <>
      <PageHeading title='Избранное' />
      <Wrapper style={{ paddingTop: 40, paddingBottom: 58 }}>
        { favoriteFilms?.length 
          ? <FilmList films={favoriteFilms}/>
          : <Paragraph>Упс... Ничего не найдено</Paragraph>
        }
      </Wrapper>
    </>
  );
};

export default FavoritesPage;