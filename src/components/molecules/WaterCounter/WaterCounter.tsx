import React from 'react';
import {Column} from '../../../components/containers';
import {Text} from '../../../components/atoms';
import {ViewStyle} from 'react-native';

export interface WaterCounterProps {
  endLevel: string;
  currentLevel: string;
  waterCounterStyle?: ViewStyle;
}
export const WaterCounter: React.FC<WaterCounterProps> = ({
  endLevel,
  currentLevel,
  waterCounterStyle,
}) => {
  return (
    <Column align columnStyle={waterCounterStyle}>
      <Text
        children={`${endLevel} ml`}
        category={'h1'}
        weight={'bold'}
        style={{color: '#2389da'}}
      />
      <Text
        children={`${currentLevel} ml`}
        category={'h3'}
        weight={'regular'}
        style={{color: 'white'}}
      />
    </Column>
  );
};
