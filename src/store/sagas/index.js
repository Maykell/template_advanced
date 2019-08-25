import { all, takeLatest } from 'redux-saga/effects';

import { exampleTypes } from '../ducks/example';
import { exampleSaga } from '../sagas/example';

export default function* rootSaga() {
  yield all([takeLatest(exampleTypes.EXAMPLE_REQUEST, exampleSaga)]);
}
