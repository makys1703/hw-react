import { PropsWithChildren } from 'react';
import styles from './ReviewsList.module.css';


export function ReviewsList({ children }: PropsWithChildren) {
  return (
    <div className={styles.reviewsList}>
      { children }
    </div>
  );
}