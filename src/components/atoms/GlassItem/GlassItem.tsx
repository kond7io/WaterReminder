import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../utils/constants/colors';
import styles from '../../../components/atoms/GlassItem/GlassItems.style';
import {iconDimensions} from '../../../utils/constants/componentsDimensions';

export const GlassItem: React.FC = ({}) => {
  return (
    <View style={styles.glassItemStyle}>
      <Icon name={'tint'} {...iconDimensions} color={colors.white} />
    </View>
  );
};
