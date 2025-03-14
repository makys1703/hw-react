import { Header } from '../../modules/Header';
import { PageBody } from './components/PageBody';
import { Outlet } from 'react-router';

export function MainLayout() {
  return (
    <>
      <Header />
      <PageBody>
        <Outlet />
      </PageBody>
    </>
  );
}