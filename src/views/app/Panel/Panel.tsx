import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';
import {Column} from '../../../components/containers';
import {WaterCounter, WaterLevel} from '../../../components/molecules';
import {AddWaterGlass} from '../../../components/molecules/AddWaterGlass/AddWaterGlass';
import {GlassContainer} from '../../../components/molecules/GlassContainer/GlassContainer';
import styles from './Panel.style';

import {useSelector} from 'react-redux';
import {getCounterSelector} from '../../../redux/Counter/Counter.selector';
import {checkCurrentLevel} from '../../../utils/helpers/checkCurrentLevel';
import {checkWaterLevel} from '../../../utils/helpers/checkWaterLevel';

export const Panel: React.FC<
  StackScreenProps<ParamList, Screens.Panel>
> = () => {
  const counterSelector = useSelector(getCounterSelector);

  return (
    <Column animated align style={styles.columnStyle}>
      <WaterCounter
        currentLevel={checkCurrentLevel(counterSelector)}
        endLevel={'3000'}
        style={styles.waterCounterStyle}
      />
      <AddWaterGlass
        buttonDisabled={counterSelector === 12}
        style={styles.addWaterGlassStyle}
      />
      <WaterLevel level={checkWaterLevel(counterSelector)} />
      <GlassContainer
        items={counterSelector}
        style={styles.glassContainerStyle}
      />
    </Column>
  );
};
