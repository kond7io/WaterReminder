import React from 'react';
import {Column} from '../../../components/containers';
import {Text} from '../../../components/atoms';
import {ViewStyle} from 'react-native';
import {colors} from '../../../utils/constants/colors';

export interface WaterCounterProps {
  endLevel: string;
  currentLevel: string;
  style?: ViewStyle;
}
export const WaterCounter: React.FC<WaterCounterProps> = ({
  endLevel,
  currentLevel,
  style,
}) => {
  return (
    <Column align style={style}>
      <Text
        children={`${endLevel} ml`}
        category={'h1'}
        weight={'bold'}
        color={colors.electricBlue}
      />
      <Text
        children={`${currentLevel} ml`}
        category={'h3'}
        weight={'regular'}
        color={colors.electricBlue}
      />
    </Column>
  );
};
