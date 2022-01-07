import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  glassItemStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  glassItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});
export default styles;
