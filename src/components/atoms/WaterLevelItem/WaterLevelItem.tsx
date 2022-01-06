import React, {useEffect, useRef} from 'react';
import {Animated, Text} from 'react-native';

export interface WaterLevelItemProps {
  opacity: React.ReactNode;
  color: string;
}
export const WaterLevelItem: React.FC<WaterLevelItemProps> = ({
  opacity,
  color,
}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: opacity,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};