import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';
import {Column} from '../../../components/containers';
import {WaterCounter, WaterLevel} from '../../../components/molecules';
import {AddWaterGlass} from '../../../components/molecules/AddWaterGlass/AddWaterGlass';
import {GlassContainer} from '../../../components/molecules/GlassContainer/GlassContainer';
import styles from './Panel.style';

import {useSelector} from 'react-redux';
import {getCounterSelector} from '../../../redux/Counter/Counter.selector';

export const Panel: React.FC<
  StackScreenProps<ParamList, Screens.Panel>
> = ({}) => {
  const counterSelector = useSelector(getCounterSelector);
  debugger;

  return (
    <Column animated align style={styles.columnStyle}>
      <WaterCounter
        currentLevel={'1500'}
        endLevel={'3000'}
        style={styles.waterCounterStyle}
      />
      <AddWaterGlass style={styles.addWaterGlassStyle} />
      <WaterLevel level={5} />
      <GlassContainer items={6} style={styles.glassContainerStyle} />
      <Text>Ile: {counterSelector}</Text>
    </Column>
  );
};
