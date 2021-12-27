import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';

export const Panel: React.FC<
  StackScreenProps<ParamList, Screens.Panel>
> = ({}) => {
  return (
    <View>
      <Text>Panel</Text>
    </View>
  );
};
