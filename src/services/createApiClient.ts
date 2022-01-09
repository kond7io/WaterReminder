import {config} from './firebaseConfig';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export const http = (type: string, email: string, password: string) => {
  if (type === 'auth') {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  } else if (type === 'app') {
    return config.database();
  }
};

export default http;
