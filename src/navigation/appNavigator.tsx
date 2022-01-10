import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '../navigation/navigationUtilities';

import {ParamList, Screens} from './screensParams';
import {SignIn} from '../views/auth';
import {Panel} from '../views/app';

export const AppNavigator = () => {
  const Stack = createStackNavigator<ParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: 'transparent'},
          headerShown: false,
        }}>
        <Stack.Screen name={Screens.SignIn} component={SignIn} />
        <Stack.Screen name={Screens.Panel} component={Panel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
