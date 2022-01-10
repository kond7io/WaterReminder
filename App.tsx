import React, {useEffect} from 'react';
import store from './src/redux/store/store';
import {Provider} from 'react-redux';
import {config} from './src/services/firebaseConfig';
import {AppNavigator} from './src/navigation';
import {LogBox} from 'react-native';
import {localNotificationSchedule} from './src/services/notifications';

const App = () => {
  useEffect(() => {
    config();
    localNotificationSchedule();
  }, []);

  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
