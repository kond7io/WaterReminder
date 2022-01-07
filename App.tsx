import React from 'react';
import {Panel} from './src/views/app/';
import {SafeAreaView} from 'react-native';
import {SignIn} from './src/views/auth';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SignIn />
    </SafeAreaView>
  );
};

export default App;
