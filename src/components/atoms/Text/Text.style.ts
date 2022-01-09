import {StyleSheet, TextStyle} from 'react-native';

interface Styles {
  bold: TextStyle;
  regular: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  bold: {
    fontWeight: 'bold',
  },
  regular: {
    fontWeight: 'normal',
  },
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 18,
  },
  h4: {
    fontSize: 12,
  },
});
export default styles;
