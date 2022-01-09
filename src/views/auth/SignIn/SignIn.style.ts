import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {loginButtonDimensions} from '../../../utils/constants/componentsDimensions';
import {colors} from '../../../utils/constants/colors';

interface Styles {
  container: ViewStyle;
  button: ViewStyle;
  responseText: TextStyle;
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
    marginTop: 15,
  },
  responseText: {
    marginTop: 15,
  },
});
export default styles;
