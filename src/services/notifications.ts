import PushNotification from 'react-native-push-notification';
import * as navigate from './../navigation/navigationUtilities';
import {Screens} from '../navigation';

export const localNotificationSchedule = () => {
  PushNotification.createChannel(
    {
      channelId: 'reminder',
      channelName: 'Reminder',
    },
    created => console.log(`createChannel returned '${created}'`),
  );
  PushNotification.localNotificationSchedule({
    channelId: 'reminder',
    title: 'Water Reminder',
    message: 'Czas na szklankę wody',
    date: new Date(Date.now() + 120 * 1000),
    allowWhileIdle: false,
    repeatType: 'time',
    repeatTime: 7200000,
  });
};

export const configure = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      navigate.navigate(Screens.SignIn);
    },

    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },

    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    popInitialNotification: true,
    requestPermissions: true,
  });
};
