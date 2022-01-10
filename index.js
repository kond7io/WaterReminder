/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import {configure} from './src/services/notifications';

configure();
AppRegistry.registerComponent(appName, () => App);
