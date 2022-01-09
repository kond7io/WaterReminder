import {createAsyncConsts} from '../../redux/async/createAsyncConsts';

export const HANDLE_USER_LOGIN = 'HANDLE_USER_LOGIN';
export const userLoginAction = (email: string, password: string) => {
  debugger;
  return {
    type: HANDLE_USER_LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const USER_LOGIN = createAsyncConsts('USER_LOGIN');
export const userLoginPending = () => {
  return {
    type: USER_LOGIN.pending,
  };
};

export const userLoginResolved = (userData: object) => {
  return {
    type: USER_LOGIN.resolved,
    userData,
  };
};

export const userLoginRejected = () => {
  return {
    type: USER_LOGIN.rejected,
  };
};
