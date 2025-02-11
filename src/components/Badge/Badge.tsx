import { PropsWithChildren } from 'react';
import styles from './Badge.module.css';


export function Badge({ children }: PropsWithChildren) {
  return (
    <div className={styles.badge}>{ children }</div>
  );
}