import React from 'react';
import {Animated, ViewStyle} from 'react-native';

export interface ColumnProps {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[] | Animated.AnimatedInterpolation;
}

export const Column: React.FC<ColumnProps> = ({children, style}) => {
  return <Animated.View style={style}>{children}</Animated.View>;
};
