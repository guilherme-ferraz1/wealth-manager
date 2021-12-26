import { createContext } from 'react';

export type AuthContextType = {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  setLoggedIn: (value: boolean) => value,
});

export default AuthContext;
