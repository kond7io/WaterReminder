import React from 'react';

import {ViewStyle} from 'react-native';
import {Button} from '../../../components/atoms';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Animated} from 'react-native';
import {colors} from '../../../utils/hooks/constants/colors';
import {useAnimationRef} from '../../../utils/hooks/useAnimationRef';
import {iconDimensions} from '../../../utils/hooks/constants/componentsDimensions';

export interface AddWaterGlassProps {
  style?: ViewStyle;
  target: () => void;
}
export const AddWaterGlass: React.FC<AddWaterGlassProps> = ({
  style,
  target,
}) => {
  const [buttonColor] = useAnimationRef();

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
    outputRange: [colors.white, colors.limeGreen],
  });

  const animatedStyle = {
    backgroundColor: buttonInterpolate,
  };

  return (
    <Animated.View style={[style, {...animatedStyle}]}>
      <Button
        target={animate}
        children={
          <Icon name={'tint'} {...iconDimensions} color={colors.buttonBlue} />
        }
      />
    </Animated.View>
  );
};
