import React from 'react';
import {
  TouchableOpacity as ReactNativeTouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './Button.style';

export interface ButtonProps {
  target: () => void;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
}

export const Button: React.FC<ButtonProps> = ({target, disabled, style}) => {
  return (
    <ReactNativeTouchableOpacity
      onPress={target}
      disabled={disabled}
      style={[styles.button, style]}
    />
  );
};
