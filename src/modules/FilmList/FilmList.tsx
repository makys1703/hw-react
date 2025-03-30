import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card } from './modules/Card';
import { Paragraph } from '../../components/Paragraph';
import { FilmCard } from '../../types/filmCard.interface';
import styles from './FilmList.module.css';


interface Props {
  films: FilmCard[]
}

export function FilmList({ films }: Props) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const openCard = (id: string) => () => {
    setLoading(true);
    navigate(`/movie/${id}`);
  };

  return (
    <>
      { loading && <Paragraph>Загрузка...</Paragraph>}
      { !loading && (
        <div className={styles.filmList}>
          { films.map((props) => 
            <Card {...props} openCard={openCard(props.id)} key={props.id} />)
          }
        </div>
      )}
    </>
  );
}