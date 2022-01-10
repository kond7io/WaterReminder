import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../../../utils/constants/colors';
import {windowHeight} from '../../../utils/constants/deviceDimension';

interface Styles {
  columnStyle: ViewStyle;
  waterCounterStyle: ViewStyle;
  addWaterGlassStyle: ViewStyle;
  glassContainerStyle: ViewStyle;
  endDayTextStyle: ViewStyle | TextStyle;
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
  endDayTextStyle: {
    position: 'absolute',
    zIndex: 2,
    bottom: windowHeight / 4,
  },
});
export default styles;
