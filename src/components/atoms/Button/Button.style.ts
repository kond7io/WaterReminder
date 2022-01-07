import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    width: 150, // change to percent value
    height: 150, // change to percent value
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
