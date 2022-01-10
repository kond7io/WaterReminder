import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @throws AsyncStorage error
 */
export const storeAsyncStorageData = async (storageKey: string, value: any) => {
  try {
    await AsyncStorage.setItem(storageKey, value);
  } catch (error) {
    console.log(error.message);
    throw Error(`Cannot set AsyncStorage item for given key: ${storageKey}`);
  }
};

export const getAsyncStorageData = async (storageKey: string) => {
  try {
    return await AsyncStorage.getItem(storageKey);
  } catch (error) {
    throw Error(`${storageKey} warning connected with get storagekey`);
  }
};

export const removeAsyncStorageData = async (storageKey: string) => {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (error) {
    throw Error(`Error ${storageKey} was not removed`);
  }
};
