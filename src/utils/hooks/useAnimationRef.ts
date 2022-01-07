import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimationRef = () => {
  const firstLevel = useRef(new Animated.Value(0)).current;
  const secondLevel = useRef(new Animated.Value(0)).current;
  const thirdLevel = useRef(new Animated.Value(0)).current;
  const fourthLevel = useRef(new Animated.Value(0)).current;
  const fifthLevel = useRef(new Animated.Value(0)).current;
  const buttonColor = useRef(new Animated.Value(0)).current;

  return [
    firstLevel,
    secondLevel,
    thirdLevel,
    fourthLevel,
    fifthLevel,
    buttonColor,
  ];
};
