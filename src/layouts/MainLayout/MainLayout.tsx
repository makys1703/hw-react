import { PropsWithChildren } from 'react';
import { Header } from '../../modules/Header';
import styles from './MainLayout.module.css';


export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        { children }
      </main>
    </>
  );
}