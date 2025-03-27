import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { filmsSelectors } from '../../store/films';
import { Card } from './modules/Card';
import { Paragraph } from '../../components/Paragraph';
import { NotFound } from './components/NotFound';
import { FilmCard } from '../../types/filmCard.interface';
import styles from './FilmList.module.css';


interface Props {
  films: FilmCard[]
}

export function FilmList({ films }: Props) {
  const [loading, setLoading] = useState(false);
  const storeLoading = useAppSelector(filmsSelectors.selectFilmsLoading);
  const globalLoading = loading || storeLoading;

  const navigate = useNavigate();

  const openCard = (id: string) => () => {
    setLoading(true);
    navigate(`/movie/${id}`);
  };

  const showList = !globalLoading && Boolean(films.length);
  const showNotFound = !globalLoading && films.length === 0;

  return (
    <>
      { showList && (
        <div className={styles.filmList}>
          { films.map((props) => 
            <Card {...props} openCard={openCard(props.id)} key={props.id} />)
          }
        </div>
      )}
      { showNotFound && <NotFound /> }
      { globalLoading && <Paragraph>Загрузка...</Paragraph> }
    </>
  );
}