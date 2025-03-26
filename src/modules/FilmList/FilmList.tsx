import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card } from './modules/Card';
import { NotFound } from './components/NotFound';
import { FilmCard } from '../../types/filmCard.interface';
import styles from './FilmList.module.css';
import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { filmsSelectors } from '../../store/films';


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

  const showList = !globalLoading && films.length > 0;
  const showNotFound = !globalLoading && films.length < 1;

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
      { globalLoading && <p>Загрузка...</p> }
    </>
  );
}