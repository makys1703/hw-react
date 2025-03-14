import { PropsWithChildren } from 'react';
import styles from './FilmInfo.module.css';


export function FilmInfo({ children }: PropsWithChildren) {
  return (
    <div className={styles.filmInfo}>
      { children }
    </div>
  );
}