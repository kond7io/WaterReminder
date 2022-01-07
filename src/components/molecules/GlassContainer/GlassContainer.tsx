import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View, Text, ViewStyle} from 'react-native';
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
    <Column>
      {glassCount.map((val, index) => {
        if (index < end) {
          return <GlassItem key={index} />;
        }
      })}
    </Column>
  );
};
