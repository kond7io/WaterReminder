import React, {useEffect} from 'react';
import store from './src/redux/store/store';
import {Provider} from 'react-redux';
import {config} from './src/services/firebaseConfig';
import {AppNavigator} from './src/navigation';
import {LogBox} from 'react-native';

const App = () => {
  useEffect(() => {
    config();
  }, []);

  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
