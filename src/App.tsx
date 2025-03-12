// import { MainPage } from './pages/MainPage';
import { LoginPage } from './pages/LoginPage';
import { UserContextProvider } from './context/User';

export function App() {
  return (
    <UserContextProvider>
      {/* <MainPage /> */}
      <LoginPage />
    </UserContextProvider>
  );
}
