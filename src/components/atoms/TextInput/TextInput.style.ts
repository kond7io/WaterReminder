import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {textInputDimensions} from '../../../utils/constants/componentsDimensions';
import {colors} from '../../../utils/constants/colors';

interface Styles {
  textInput: ViewStyle;
  textValidation: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  textInput: {
    ...textInputDimensions,
    marginTop: 10,
  },
  textValidation: {
    width: '100%',
    fontSize: 12,
    marginLeft: 5,
    marginTop: 5,
    color: colors.rubyShard,
  },
});

export default styles;
