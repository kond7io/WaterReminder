import {put, call, takeLeading} from 'redux-saga/effects';
import {
  HANDLE_USER_LOGIN,
  userLoginPending,
  userLoginRejected,
  userLoginResolved,
} from '../../redux/User/User.action';
import {userLoginApi} from '../../redux/User/User.api';
import {User} from '../../types/User';
import {getcounter} from '../../redux/Counter/Counter.saga';
import {Alert} from 'react-native';
import * as navigate from '../../navigation/navigationUtilities';
import {Screens} from '../../navigation';

export function* userlogin(action: any) {
  yield put(userLoginPending());
  const {email, password} = action.payload;
  try {
    const user: User = yield userLoginApi(email, password);
    yield put(userLoginResolved(user));
    navigate.navigate(Screens.Panel);
    Alert.alert('Zalogowano');

    yield call(getcounter);
  } catch (error) {
    Alert.alert('Błąd podczas logowania ' + error.message);
    yield put(userLoginRejected());
  }
}
export default function* UserSaga() {
  yield takeLeading(HANDLE_USER_LOGIN, userlogin);
}
