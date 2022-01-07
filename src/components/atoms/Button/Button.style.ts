import {StyleSheet, ViewStyle} from 'react-native';
import {buttonDimensions} from '../../../utils/hooks/constants/componentsDimensions';

interface Styles {
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    ...buttonDimensions,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
