import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD7s4eQa2JChXN4oyaFou7E5V_AKI-WY6g',
  authDomain: 'waterreminder-2fd4b.firebaseapp.com',
  databaseURL: 'https://waterreminder-2fd4b-default-rtdb.firebaseio.com',
  projectId: 'waterreminder-2fd4b',
  storageBucket: 'waterreminder-2fd4b.appspot.com',
  messagingSenderId: '184943977515',
  appId: '1:184943977515:web:f19f65e8c2fb672d3a366e',
};

export const config = () => initializeApp(firebaseConfig);
