import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../utils/colors';
import styles from '../../../components/atoms/GlassItem/GlassItems.style';

export const GlassItem: React.FC = ({}) => {
  return (
    <View style={styles.glassItemStyle}>
      <Icon name={'tint'} size={42} color={colors.white} />
    </View>
  );
};
