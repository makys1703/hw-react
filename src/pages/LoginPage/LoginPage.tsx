import { MainLayout } from '../../layouts/MainLayout';
import { PageHeading } from '../../modules/PageHeading';
import { LoginForm } from './modules/LoginForm';

export function LoginPage() {
  return (
    <MainLayout>
      <PageHeading title='Вход' />
      <LoginForm />
    </MainLayout>
  );
}