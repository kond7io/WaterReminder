import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../../utils/hooks/constants/colors';

interface Styles {
  columnStyle: ViewStyle;
  waterCounterStyle: ViewStyle;
  addWaterGlassStyle: ViewStyle;
  glassContainerStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  columnStyle: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  waterCounterStyle: {
    flex: 1,
    zIndex: 2,
  },
  addWaterGlassStyle: {
    zIndex: 2,
    borderRadius: 150,
    elevation: 20,
  },
  glassContainerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
    bottom: 20,
    zIndex: 2,
  },
});
export default styles;
