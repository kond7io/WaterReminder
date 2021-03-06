import React from 'react';
import {ViewStyle} from 'react-native';
import {Column} from '../../../components/containers';
import {GlassItem} from '../../../components/atoms/GlassItem/GlassItem';

export interface GlassContainerProps {
  items: number;
  style?: ViewStyle;
}
export const GlassContainer: React.FC<GlassContainerProps> = ({
  items,
  style,
}) => {
  const glassCount = new Array(items).fill(0);
  const end = 12;

  return (
    <Column style={style}>
      {glassCount.map((val, index) => {
        if (index < end) {
          return <GlassItem key={index} />;
        }
      })}
    </Column>
  );
};
