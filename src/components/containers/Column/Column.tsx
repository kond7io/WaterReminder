import React from 'react';
import {Animated, View, ViewStyle} from 'react-native';

export interface ColumnProps {
  children?: React.ReactNode;
  animated?: boolean;
  align?: boolean;
  style?: ViewStyle | ViewStyle[] | Animated.AnimatedInterpolation;
}

export const Column: React.FC<ColumnProps> = ({
  children,
  animated,
  align,
  style,
}) => {
  const alignItems = align && {
    alignItems: 'center',
  };

  return animated ? (
    <Animated.View style={[style, alignItems]}>{children}</Animated.View>
  ) : (
    <View style={[style, alignItems]}>{children}</View>
  );
};
