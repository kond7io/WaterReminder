import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';
import {Column} from '../../../components/containers';
import {WaterCounter, WaterLevel} from '../../../components/molecules';
import {AddWaterGlass} from '../../../components/molecules/AddWaterGlass/AddWaterGlass';
import {GlassContainer} from '../../../components/molecules/GlassContainer/GlassContainer';

export const Panel: React.FC<
  StackScreenProps<ParamList, Screens.Panel>
> = ({}) => {
  return (
    <Column
      animated
      align
      columnStyle={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <WaterCounter
        currentLevel={'1500'}
        endLevel={'3000'}
        waterCounterStyle={{zIndex: 2, flex: 1}}
      />
      <AddWaterGlass target={() => alert('hello')} />
      <WaterLevel level={5} />
      <GlassContainer items={6} style={{flex: 1, justifyContent: 'flex-end'}} />
    </Column>
  );
};
