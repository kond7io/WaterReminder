import http from '../../services/createApiClient';
import {User} from '../../types/User';

export const userLoginApi = async (email: string, password: string) => {
  let user: User;
  await http('auth', email, password).then(userCredential => {
    user = userCredential.user;
  });
  // @ts-ignore
  return user;
};
