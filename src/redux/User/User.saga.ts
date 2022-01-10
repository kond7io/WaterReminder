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
import * as navigate from '../../navigation/navigationUtilities';
import {Screens} from '../../navigation';
import {localNotificationSchedule} from '../../services/notifications';
import {
  getIsFirstLogin,
  saveFirstLogin,
} from '../../utils/AsyncStorage/userFirstLoginAsyncStorage';

export function* userlogin(action: any) {
  yield put(userLoginPending());
  const {email, password, callback} = action.payload;
  try {
    const user: User = yield userLoginApi(email, password);
    yield put(userLoginResolved(user));

    let response: boolean | undefined = yield getIsFirstLogin();

    if (response === undefined) {
      yield saveFirstLogin(true);
      yield localNotificationSchedule();
    }

    yield call(getcounter);
    navigate.navigate(Screens.Panel);
  } catch (error) {
    callback();
    yield put(userLoginRejected());
  }
}
export default function* UserSaga() {
  yield takeLeading(HANDLE_USER_LOGIN, userlogin);
}
