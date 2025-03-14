import { PropsWithChildren } from 'react';
import { Wrapper } from '../../../../components/Wrapper';


export function PageBody({ children }: PropsWithChildren) {
  return (
    <main>
      <Wrapper style={{ paddingTop: 80 }} main>
        { children }
      </Wrapper>
    </main>
  );
}