import {put, select, takeLeading} from 'redux-saga/effects';

import {
  applyCounterPending,
  applyCounterResolved,
  applyCounterRejected,
  HANDLE_APPLY_COUNTER,
  HANDLE_GET_COUNTER,
  getCounterPending,
  getCounterResolved,
  getCounterRejected,
} from '../../redux/Counter/Counter.action';
import {applyCounterApi, getCounterApi} from '../../redux/Counter/Counter.api';
import {getUserDataSelector} from '../../redux/User/User.selector';
import {User} from '../../types/User';

export function* applycounter() {
  yield put(applyCounterPending());

  try {
    const user: User = yield select(getUserDataSelector);
    yield applyCounterApi(user.uid);
    yield put(applyCounterResolved());
  } catch (error) {
    const err = error.message;
    yield put(applyCounterRejected());
  }
}

export function* getcounter() {
  yield put(getCounterPending());
  debugger;
  try {
    const user: User = yield select(getUserDataSelector);
    debugger;

    const response = yield getCounterApi(user.uid);
    debugger;
    yield put(getCounterResolved(response));
  } catch (error) {
    console.log(error.message);
    debugger;

    yield put(getCounterRejected());
  }
}

export default function* CounterSaga() {
  yield takeLeading(HANDLE_APPLY_COUNTER, applycounter);
  yield takeLeading(HANDLE_GET_COUNTER, getcounter);
}
