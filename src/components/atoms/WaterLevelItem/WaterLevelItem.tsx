import React from 'react';
import {Animated} from 'react-native';
import styles from './WaterLevelItem.style';

export interface WaterLevelItemProps {
  opacity: Animated.AnimatedInterpolation;
  backgroundColor: string;
}
export const WaterLevelItem: React.FC<WaterLevelItemProps> = ({
  opacity,
  backgroundColor,
}) => {
  return (
    <Animated.View
      style={[
        styles.waterLevelItemStyle,
        {opacity: opacity, backgroundColor: backgroundColor},
      ]}
    />
  );
};
