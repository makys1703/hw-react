import { Card } from './modules/Card';
import { Film } from '../../types/film.interface';
import styles from './FilmList.module.css';


interface Props {
  films: Film[]
}

export function FilmList({ films }: Props) {
  return (
    <div className={styles.filmList}>
      { films.map((props) => <Card {...props} key={props.id} />) }
    </div>
  );
}