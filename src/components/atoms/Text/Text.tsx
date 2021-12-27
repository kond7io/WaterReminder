import React from 'react';
import {Text as ReactNativeText, TextStyle} from 'react-native';
import styles from './Text.style';

export interface TextProps {
  children: string;
  target?: () => void;
  style?: TextStyle | TextStyle[];
  weight: 'bold' | 'regular';
  category: 'h1' | 'h2' | 'h3';
}

export const Text: React.FC<TextProps> = ({
  children,
  target,
  weight,
  category,
  style,
}) => {
  let textWeight: {};
  switch (weight) {
    case 'bold':
      textWeight = styles.bold;
      break;
    case 'regular':
      textWeight = styles.regular;
      break;
    default:
      textWeight = {};
      break;
  }

  const textSize = category ? styles[category] : {};

  return (
    <ReactNativeText onPress={target} style={[textSize, textWeight, style]}>
      {children}
    </ReactNativeText>
  );
};
