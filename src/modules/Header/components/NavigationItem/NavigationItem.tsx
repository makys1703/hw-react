import { PropsWithChildren } from 'react';
import styles from './NavigationItem.module.css';


export function NavigationItem({ children }: PropsWithChildren) {
  return (
    <li className={styles.listItem}>{ children }</li>
  );
}