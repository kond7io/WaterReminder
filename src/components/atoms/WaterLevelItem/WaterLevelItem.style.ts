import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  waterLevelItemStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  waterLevelItemStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
