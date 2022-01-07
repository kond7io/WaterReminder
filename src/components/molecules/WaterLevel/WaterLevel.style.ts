import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  waterLevelContainerStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  waterLevelContainerStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
});
export default styles;
