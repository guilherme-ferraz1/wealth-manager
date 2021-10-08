import React from 'react';
import { View } from 'react-native';
import Text from '../../components/atoms/Text';

const SettingsScreen: React.FC = (): JSX.Element => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Settings </Text>
    </View>
  );
};

export default SettingsScreen;
