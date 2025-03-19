import { PageHeading } from '../../modules/PageHeading';
import { LoginForm } from './modules/LoginForm';

export function LoginPage() {
  return (
    <>
      <PageHeading title='Вход' />
      <LoginForm />
    </>
  );
};

export default LoginPage;