import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {MainNavigator} from './mainNavigator';
import {AuthNavigator} from './authNavigator';

export type AppParamList = {
  authStack: undefined;
  mainStack: undefined;
};

const Stack = createStackNavigator<AppParamList>();
export const navigationRef = createNavigationContainerRef();

const AppStack = () => {
  const isSignedIn = false;

  const navigatorComponent = isSignedIn ? MainNavigator : AuthNavigator;
  const navigatorName = isSignedIn ? 'mainStack' : 'authStack';

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigatorName}
        component={navigatorComponent}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';
