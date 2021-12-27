import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ParamList, Screens} from './screensParams';
import {SignIn} from 'src/views/auth';

export function AuthNavigator() {
  const Stack = createStackNavigator<ParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: 'transparent'},
        headerShown: false,
      }}
      initialRouteName={Screens.SignIn}>
      <Stack.Screen name={Screens.SignIn} component={SignIn} />
    </Stack.Navigator>
  );
}
