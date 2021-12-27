import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    height: 60, // change to percent value
    width: 60, // change to percent value
    position: 'absolute',
  },
});
export default styles;
