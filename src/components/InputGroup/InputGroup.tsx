import { PropsWithChildren } from 'react';
import styles from './InputGroup.module.css';


export function InputGroup({ children }: PropsWithChildren) {
  return (
    <div className={styles.inputGroup}>
      { children }
    </div>
  );
}