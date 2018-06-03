import { all, takeLatest } from 'redux-saga/effects';

import requestDataSaga from './olaf';
import { actionTypes } from '../actions/olaf';

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.REQUEST_INIT, requestDataSaga)
  ]);
}

export default rootSaga;
