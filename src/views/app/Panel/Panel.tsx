import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';
import {Column} from '../../../components/containers';
import {WaterCounter, WaterLevel} from '../../../components/molecules';
import {AddWaterGlass} from '../../../components/molecules/AddWaterGlass/AddWaterGlass';
import {GlassContainer} from '../../../components/molecules/GlassContainer/GlassContainer';
import styles from './Panel.style';

export const Panel: React.FC<
  StackScreenProps<ParamList, Screens.Panel>
> = ({}) => {
  return (
    <Column animated align style={styles.columnStyle}>
      <WaterCounter
        currentLevel={'1500'}
        endLevel={'3000'}
        style={styles.waterCounterStyle}
      />
      <AddWaterGlass
        style={styles.addWaterGlassStyle}
        target={() => alert('hello')}
      />
      <WaterLevel level={5} />
      <GlassContainer items={6} style={styles.glassContainerStyle} />
    </Column>
  );
};
