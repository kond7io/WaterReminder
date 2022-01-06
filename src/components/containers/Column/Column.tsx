import React from 'react';
import {Animated, View, ViewStyle} from 'react-native';

export interface ColumnProps {
  children?: React.ReactNode;
  animated?: boolean;
  align?: boolean;
  columnStyle?: ViewStyle | ViewStyle[] | Animated.AnimatedInterpolation;
}

export const Column: React.FC<ColumnProps> = ({
  children,
  animated,
  align,
  columnStyle,
}) => {
  const alignItems = align && {
    alignItems: 'center',
  };

  return animated ? (
    <Animated.View style={[columnStyle, alignItems]}>{children}</Animated.View>
  ) : (
    <View style={[columnStyle, alignItems]}>{children}</View>
  );
};
