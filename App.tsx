/* eslint-disable global-require */
import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigators';
import { theme } from './src/styles';
import AuthContext from './src/contexts/auth';

export default function App(): JSX.Element {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const value = { loggedIn, setLoggedIn };
  const [fontsLoaded] = useFonts({
    'Avenir-Next-Regular': require('./src/assets/fonts/AvenirNextLTPro-Regular.ttf'),
    'Avenir-Next-Bold': require('./src/assets/fonts/AvenirNextLTPro-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{ flex: 0, backgroundColor: theme.colors.primary }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <AuthContext.Provider value={value}>
            <RootNavigator />
          </AuthContext.Provider>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
