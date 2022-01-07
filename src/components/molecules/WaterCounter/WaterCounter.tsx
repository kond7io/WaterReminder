import React from 'react';
import {Column} from '../../../components/containers';
import {Text} from '../../../components/atoms';
import {ViewStyle} from 'react-native';
import {colors} from '../../../utils/colors';

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
    <Column align>
      <Text
        children={`${endLevel} ml`}
        category={'h1'}
        weight={'bold'}
        style={{color: colors.electricBlue}}
      />
      <Text
        children={`${currentLevel} ml`}
        category={'h3'}
        weight={'regular'}
        style={{color: colors.electricBlue}}
      />
    </Column>
  );
};
