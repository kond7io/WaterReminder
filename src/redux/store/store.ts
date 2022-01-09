import createSagaMiddleware from 'redux-saga';
import {call, all} from 'redux-saga/effects';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {UserReducer} from '../../redux/User/User.reducer';
import {CounterReducer} from '../../redux/Counter/Counter.reducer';

import UserSaga from '../../redux/User/User.saga';
import CounterSaga from '../../redux/Counter/Counter.saga';

const store = combineReducers({
  user: UserReducer,
  counter: CounterReducer,
});

export function* rootSaga() {
  yield all([call(UserSaga), call(CounterSaga)]);
}

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  store,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
