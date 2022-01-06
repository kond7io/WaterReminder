import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export interface GlassItemProps {}

export const GlassItem: React.FC<GlassItemProps> = ({}) => {
  return (
    <View
      style={{
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon name={'tint'} size={42} color={'white'} />
    </View>
  );
};
