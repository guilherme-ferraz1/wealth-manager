import React, { useContext } from 'react';
import { AuthNavigator } from './auth-navigator';
import { AppNavigator } from './app-navigator';
import AuthContext from '../contexts/auth';

export const RootNavigator = (): JSX.Element => {
  const { loggedIn } = useContext(AuthContext);
  return <>{!loggedIn ? <AuthNavigator /> : <AppNavigator />}</>;
};
