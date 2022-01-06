import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View, Text} from 'react-native';
import {WaterLevelItem} from '../../../components/atoms';

export interface WaterLevelProps {
  level: number;
}
export const WaterLevel: React.FC<WaterLevelProps> = ({level}) => {
  const firstLevel = useRef(new Animated.Value(0)).current;
  const secondLevel = useRef(new Animated.Value(0)).current;
  const thirdLevel = useRef(new Animated.Value(0)).current;
  const fourthLevel = useRef(new Animated.Value(0)).current;
  const fifthLevel = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(250, [
      Animated.timing(firstLevel, {
        toValue: level < 1 ? 0 : 1,
        useNativeDriver: true,
      }),
      Animated.timing(secondLevel, {
        toValue: level < 2 ? 0 : 1,
        useNativeDriver: true,
      }),
      Animated.timing(thirdLevel, {
        toValue: level < 3 ? 0 : 1,
        useNativeDriver: true,
      }),
      Animated.timing(fourthLevel, {
        toValue: level < 4 ? 0 : 1,
        useNativeDriver: true,
      }),
      Animated.timing(fifthLevel, {
        toValue: level < 5 ? 0 : 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, [level]);

  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}>
      <WaterLevelItem opacity={fifthLevel} color={'#74ccf4'} />
      <WaterLevelItem opacity={fourthLevel} color={'#5abcd8'} />
      <WaterLevelItem opacity={thirdLevel} color={'#1ca3ec'} />
      <WaterLevelItem opacity={secondLevel} color={'#2389da'} />
      <WaterLevelItem opacity={firstLevel} color={'#0f5e9c'} />
    </View>
  );
};
