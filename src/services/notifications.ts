import PushNotification from 'react-native-push-notification';
import * as navigate from './../navigation/navigationUtilities';
import {Screens} from '../navigation';

export const localNotificationSchedule = () => {
  PushNotification.createChannel(
    {
      channelId: 'reminder', // (required)
      channelName: 'Reminder', // (required)
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
  PushNotification.localNotificationSchedule({
    channelId: 'reminder',
    title: 'Water Reminder',
    message: 'Czas na szklankę wody', // (required)
    date: new Date(Date.now() + 10 * 1000), // in 60 secs
    allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    repeatType: 'time',
    repeatTime: 7200000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
  });
};

export const configure = () => {
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      navigate.navigate(Screens.SignIn);
      // process the notification
    },

    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);

      // process the action
    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
    requestPermissions: true,
  });
};
