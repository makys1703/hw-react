import { useState, PropsWithChildren } from 'react';
import { UserContext } from './user.context';
import { User } from '../../types/user.interface';


export function UserContextProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<User | null>(null);

  const logInUser = (user: User) => setData(user);
  const logOutUser = () => setData(null);

  return (
    <UserContext value={{ userData: data, logInUser, logOutUser }}>
      { children }
    </UserContext>
  );
}