import { PropsWithChildren } from 'react';
import { Heading } from '../../../../../../components/Heading';
import styles from './FilmHeader.module.css';


export function FilmHeader({ children }: PropsWithChildren) {
  return (
    <div className={styles.filmHeader}>
      <span className={styles.headerLabel}>Поиск фильмов</span>
      <Heading level={3}>
        { children }
      </Heading>
    </div>
  );
}