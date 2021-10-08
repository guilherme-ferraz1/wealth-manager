import React from 'react';
import { AuthNavigator } from './auth-navigator';
import { AppNavigator } from './app-navigator';

export const RootNavigator = (): JSX.Element => {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <AuthNavigator /> : <AppNavigator />}</>;
};
