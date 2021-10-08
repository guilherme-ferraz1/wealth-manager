/* eslint-disable global-require */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigators';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    'Avenir-Next-Regular': require('./src/assets/fonts/AvenirNextLTPro-Regular.ttf'),
    'Avenir-Next-Bold': require('./src/assets/fonts/AvenirNextLTPro-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
