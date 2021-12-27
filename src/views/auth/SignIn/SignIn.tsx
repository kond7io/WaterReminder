import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';

export const SignIn: React.FC<
  StackScreenProps<ParamList, Screens.SignIn>
> = ({}) => {
  return (
    <View>
      <Text>SignIn</Text>
    </View>
  );
};
