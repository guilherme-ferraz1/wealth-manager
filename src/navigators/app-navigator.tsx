import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../scenes/home';
import SettingsScreen from '../scenes/settings';

const Tab = createBottomTabNavigator();

export const AppNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
