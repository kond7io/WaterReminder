import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ParamList, Screens} from './screensParams';
import {Panel} from 'src/views/app';

export function MainNavigator() {
  const Stack = createStackNavigator<ParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: 'transparent'},
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.Panel} component={Panel} />
    </Stack.Navigator>
  );
}
