import React, {useEffect} from 'react';
import {Animated} from 'react-native';
import {WaterLevelItem} from '../../../components/atoms';
import {colors} from '../../../utils/hooks/constants/colors';
import {Column} from '../../../components/containers';
import styles from './WaterLevel.style';
import {useAnimationRef} from '../../../utils/hooks/useAnimationRef';

export interface WaterLevelProps {
  level: number;
}
export const WaterLevel: React.FC<WaterLevelProps> = ({level}) => {
  const [firstLevel, secondLevel, thirdLevel, fourthLevel, fifthLevel] =
    useAnimationRef();

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
    <Column style={styles.waterLevelContainerStyle}>
      <WaterLevelItem opacity={fifthLevel} backgroundColor={colors.mayaBlue} />
      <WaterLevelItem
        opacity={fourthLevel}
        backgroundColor={colors.seaSerpent}
      />
      <WaterLevelItem
        opacity={thirdLevel}
        backgroundColor={colors.buttonBlue}
      />
      <WaterLevelItem
        opacity={secondLevel}
        backgroundColor={colors.bleuFrance}
      />
      <WaterLevelItem
        opacity={firstLevel}
        backgroundColor={colors.electricBlue}
      />
    </Column>
  );
};
