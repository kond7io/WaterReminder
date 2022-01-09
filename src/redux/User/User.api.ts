import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {User} from '../../types/User';

export const userLoginApi = async (email: string, password: string) => {
  const auth = getAuth();
  let user: User;
  await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      user = userCredential.user;
      debugger;
    })
    .catch(error => {
      console.error(error);
    });

  return user;
};
