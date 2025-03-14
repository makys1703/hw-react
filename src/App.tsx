import { UserContextProvider } from './context/User';
import { RouterProvider } from 'react-router';
import { router } from './router';

export function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}
