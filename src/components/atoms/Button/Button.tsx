import React from 'react';
import {
  TouchableOpacity as ReactNativeTouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './Button.style';

export interface ButtonProps {
  target: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
}

export const Button: React.FC<ButtonProps> = ({
  target,
  children,
  disabled,
  style,
}) => {
  return (
    <ReactNativeTouchableOpacity
      activeOpacity={0.8}
      onPress={target}
      disabled={disabled}
      style={[styles.button, style]}>
      {children}
    </ReactNativeTouchableOpacity>
  );
};
