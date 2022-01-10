import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export const userLoginApi = async (email: string, password: string) => {
  const auth = getAuth();
  let user;
  await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      user = userCredential.user;
    })
    .catch(error => {
      throw new Error(error);
    });

  return user;
};
