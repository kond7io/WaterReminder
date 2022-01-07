import React, {useRef, useState} from 'react';

import {ViewStyle, View} from 'react-native';
import {Button} from '../../../components/atoms';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Animated, Easing} from 'react-native';

export interface AddWaterGlassProps {
  style?: ViewStyle;
  target: () => void;
}
export const AddWaterGlass: React.FC<AddWaterGlassProps> = ({
  style,
  target,
}) => {
  const buttonColor = useRef(new Animated.Value(0.3)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(buttonColor, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(buttonColor, {
        toValue: 0,
        delay: 250,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const buttonInterpolate = buttonColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#42db40'],
  });

  const animatedStyle = {
    backgroundColor: buttonInterpolate,
  };

  return (
    <Animated.View
      style={{
        zIndex: 2,
        borderRadius: 150,
        elevation: 20,
        ...animatedStyle,
      }}>
      <Button
        target={animate}
        style={[
          {
            width: 150,
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
        ]}>
        <Icon name={'tint'} size={42} color={'#1ca3ec'} />
      </Button>
    </Animated.View>
  );
};
