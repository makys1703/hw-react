import { PropsWithChildren } from 'react';
import { Header } from '../../modules/Header';
import { PageBody } from './components/PageBody';


export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <PageBody>
        { children }
      </PageBody>
    </>
  );
}