import React from 'react';
import { View } from 'react-native';
import Text from '../../components/atoms/Text';

const LoginScreen: React.FC = (): JSX.Element => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Login </Text>
    </View>
  );
};

export default LoginScreen;
