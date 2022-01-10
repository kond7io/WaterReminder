import React from 'react';
import {useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';
import {Column} from '../../../components/containers';
import {Text} from '../../../components/atoms/Text/Text';
import {WaterCounter, WaterLevel} from '../../../components/molecules';
import {AddWaterGlass} from '../../../components/molecules/AddWaterGlass/AddWaterGlass';
import {GlassContainer} from '../../../components/molecules/GlassContainer/GlassContainer';
import {getCounterSelector} from '../../../redux/Counter/Counter.selector';
import {checkCurrentLevel} from '../../../utils/helpers/checkCurrentLevel';
import {checkWaterLevel} from '../../../utils/helpers/checkWaterLevel';
import {clearCounterAction} from '../../../redux/Counter/Counter.action';
import {useDispatch} from 'react-redux';
import {colors} from '../../../utils/constants/colors';
import {texts} from '../../../utils/constants/texts';
import styles from './Panel.style';

export const Panel: React.FC<
  StackScreenProps<ParamList, Screens.Panel>
> = () => {
  const counterSelector = useSelector(getCounterSelector);
  const end = counterSelector >= 12;
  const dispatch = useDispatch();
  return (
    <Column animated align style={styles.columnStyle}>
      <WaterCounter
        currentLevel={checkCurrentLevel(counterSelector)}
        endLevel={'3000'}
        style={styles.waterCounterStyle}
      />
      <AddWaterGlass buttonDisabled={end} style={styles.addWaterGlassStyle} />
      <WaterLevel level={checkWaterLevel(counterSelector)} />
      <GlassContainer
        items={counterSelector}
        style={styles.glassContainerStyle}
      />
      {!!end && (
        <Text
          children={texts.END_DAY}
          style={styles.endDayTextStyle}
          target={() => dispatch(clearCounterAction())}
          weight={'regular'}
          category={'h2'}
          color={colors.white}
        />
      )}
    </Column>
  );
};
