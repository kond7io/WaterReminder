import React from 'react';
import {Panel} from './src/views/app/';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Panel />
    </SafeAreaView>
  );
};

export default App;
