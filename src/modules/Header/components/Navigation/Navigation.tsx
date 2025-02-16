import { PropsWithChildren } from 'react';
import styles from './Navigation.module.css';


export function Navigation({ children }: PropsWithChildren) {
  return (
    <ol className={styles.orderedList}>{ children }</ol>
  );
}