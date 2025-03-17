import { PropsWithChildren } from 'react';
import { Heading } from '../../components/Heading';
import styles from './PageHeading.module.css';


interface Props extends PropsWithChildren {
  title: string
}

export function PageHeading({ title, children }: Props) {
  return (
    <div className={styles.pageHeading}>
      <Heading>{ title }</Heading>
      { children && (
        <div className={styles.text}>
          { children }
        </div>
      )} 
    </div>
  );
}