import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  textInput: ViewStyle;
  textValidation: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  textInput: {
    height: 50,
    marginTop: 10,
  },
  textValidation: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: 5,
  },
});

export default styles;
