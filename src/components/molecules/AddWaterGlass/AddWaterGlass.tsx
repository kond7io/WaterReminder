import React from 'react';

import {Text, ViewStyle} from 'react-native';
import {Button} from '../../../components/atoms';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface AddWaterGlassProps {
  style?: ViewStyle;
  target: () => void;
}
export const AddWaterGlass: React.FC<AddWaterGlassProps> = ({
  style,
  target,
}) => {
  return (
    <Button
      target={target}
      style={[
        {
          backgroundColor: 'white',
          width: 150,
          height: 150,
          zIndex: 2,
          borderRadius: 150,
          elevation: 20,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}>
      <Icon name={'tint'} size={42} color={'#1ca3ec'} />
    </Button>
  );
};
