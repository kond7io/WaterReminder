import React, {useEffect} from 'react';
import store from './src/redux/store/store';
import {Provider} from 'react-redux';
import {config} from './src/services/firebaseConfig';
import {AppNavigator} from './src/navigation';
import {navigationRef} from './src/navigation/navigationUtilities';
import {LogBox} from 'react-native';
import {notifications} from './src/services/notifications';

const App = () => {
  useEffect(() => {
    config();
    notifications();
  }, []);

  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <AppNavigator ref={navigationRef} />
    </Provider>
  );
};

export default App;
