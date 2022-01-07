import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  textInput: ViewStyle;
  textValidation: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  textInput: {
    height: 50,
  },
  textValidation: {},
});

export default styles;
