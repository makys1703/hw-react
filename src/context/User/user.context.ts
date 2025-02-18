import { createContext} from 'react';
import { User } from '../../types/user.interface';

export interface UserContextData {
  userData: User | null,
  logInUser: (user: User) => void,
  logOutUser: () => void
};

export const UserContext = createContext<UserContextData | null>(null);
