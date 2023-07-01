import { createContext, useContext, useState } from 'react';

import { getUserInfo } from '@utils/index';

interface User {
  id: number;
  github: number;
  loginId: string;
  profileUrl: string;
}

interface UserContextValue {
  user: User | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const useUserContext = () => {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('useUserContext should be used within UserContext.Provider');
  }

  return user;
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('Token');
  const initUserState = token ? getUserInfo(token) : null;

  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  const [user, setUser] = useState<User | null>(initUserState);

  const login = (token: string) => {
    localStorage.setItem('Token', token);
    setUser({ ...getUserInfo(token) });
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('Token');
    setUser(null);
    setIsLoggedIn(false);
  };

  return <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>{children}</UserContext.Provider>;
};

export { useUserContext, UserProvider };
