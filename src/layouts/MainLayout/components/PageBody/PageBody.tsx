import { PropsWithChildren } from 'react';
import { Wrapper } from '../../../../components/Wrapper';
import styles from './PageBody.module.css';


export function PageBody({ children }: PropsWithChildren) {
  return (
    <main>
      <Wrapper className={styles.main}>
        { children }
      </Wrapper>
    </main>
  );
}