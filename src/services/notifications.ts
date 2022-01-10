import PushNotification from 'react-native-push-notification';

export const notifications = () => {
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
    date: new Date(Date.now() + 2 * 1000), // in 60 secs
    allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    repeatType: 'time',
    repeatTime: 7200000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
  });
};
