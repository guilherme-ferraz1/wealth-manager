import React from 'react';
import { View } from 'react-native';
import Text from '../../components/atoms/Text';

const StatisticsScreen: React.FC = (): JSX.Element => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Statistics </Text>
    </View>
  );
};

export default StatisticsScreen;
