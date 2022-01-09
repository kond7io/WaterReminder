import {StyleSheet, ViewStyle} from 'react-native';
import {loginButtonDimensions} from '../../../utils/constants/componentsDimensions';
import {colors} from '../../../utils/constants/colors';

interface Styles {
  container: ViewStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    ...loginButtonDimensions,
    backgroundColor: colors.bleuFrance,
    borderRadius: 15,
    marginTop: 20,
  },
});
export default styles;
