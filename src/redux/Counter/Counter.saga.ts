import {put, takeLeading} from 'redux-saga/effects';

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

export function* applycounter(action: any) {
  yield put(applyCounterPending());
  const {waterCounter} = action.payload;

  try {
    yield put(applyCounterResolved(waterCounter));
  } catch (error) {
    yield put(applyCounterRejected());
  }
}
export function* getcounter() {
  yield put(getCounterPending());

  try {
    yield put(getCounterResolved(222));
  } catch (error) {
    yield put(getCounterRejected());
  }
}

export default function* UserSaga() {
  yield takeLeading(HANDLE_APPLY_COUNTER, applycounter);
  yield takeLeading(HANDLE_GET_COUNTER, getcounter);
}
