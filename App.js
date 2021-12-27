import React from 'react';
import {AppNavigator} from 'src/navigation';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
