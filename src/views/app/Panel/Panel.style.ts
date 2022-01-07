import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../../utils/colors';

interface Styles {
  columnStyle: ViewStyle;
  waterCounterStyle: ViewStyle;
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
});
export default styles;
