import {
  getAsyncStorageData,
  removeAsyncStorageData,
  storeAsyncStorageData,
} from './generic/storeAsyncStorageData';

export const saveFirstLogin = async (isFirstLogin: boolean) => {
  await storeAsyncStorageData('FIRST_USER_LOGIN', isFirstLogin.toString());
};

export const getIsFirstLogin = async (): Promise<any> => {
  const isFirstUserLogin: boolean | null = await getAsyncStorageData(
    'FIRST_USER_LOGIN',
  );
  if (isFirstUserLogin) {
    return isFirstUserLogin;
  } else if (isFirstUserLogin === undefined) {
    return false;
  }
};

export const removeUserToken = async () => {
  await removeAsyncStorageData('FIRST_USER_LOGIN');
};
