import { PropsWithChildren } from 'react';
import styles from './CardBody.module.css';


export function CardBody({ children }: PropsWithChildren) {
  return (
    <div className={styles.cardBody}>
      { children }
    </div>
  );
}