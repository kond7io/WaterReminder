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
  HANDLE_CLEAR_COUNTER,
  clearCounterPending,
  clearCounterResolved,
  clearCounterRejected,
} from '../../redux/Counter/Counter.action';
import {
  applyCounterApi,
  getCounterApi,
  clearCounterApi,
} from '../../redux/Counter/Counter.api';
import {getUserDataSelector} from '../../redux/User/User.selector';
import {User} from '../../types/User';

export function* applycounter() {
  yield put(applyCounterPending());

  try {
    const user: User = yield select(getUserDataSelector);
    yield applyCounterApi(user.uid);
    yield put(applyCounterResolved());
  } catch (error) {
    yield put(applyCounterRejected());
  }
}

export function* getcounter() {
  yield put(getCounterPending());
  try {
    const user: User = yield select(getUserDataSelector);
    const response: number = yield getCounterApi(user.uid);
    yield put(getCounterResolved(response));
  } catch (error) {
    yield put(getCounterRejected());
  }
}

export function* clearcounter() {
  yield put(clearCounterPending());
  try {
    const user: User = yield select(getUserDataSelector);
    yield clearCounterApi(user.uid);
    yield put(clearCounterResolved());
  } catch (error) {
    yield put(clearCounterRejected());
  }
}

export default function* CounterSaga() {
  yield takeLeading(HANDLE_APPLY_COUNTER, applycounter);
  yield takeLeading(HANDLE_GET_COUNTER, getcounter);
  yield takeLeading(HANDLE_CLEAR_COUNTER, clearcounter);
}
