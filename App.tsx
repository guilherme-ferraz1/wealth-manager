/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Text from './src/components/atoms/Text';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    'Avenir-Next-Regular': require('./src/assets/fonts/AvenirNextLTPro-Regular.ttf'),
    'Avenir-Next-Bold': require('./src/assets/fonts/AvenirNextLTPro-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Avenir-Next-Regular</Text>
    </View>
  );
}
