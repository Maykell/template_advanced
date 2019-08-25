import { call, put } from 'redux-saga/effects';
import { exampleActions } from '../ducks/example';
import { exampleService } from '../../services/api';

export function* exampleSaga(action) {
  try {
    const response = yield call(exampleService.create, action.payload);
    yield put(exampleActions.exampleSuccess(response));
  } catch (error) {
    yield put(exampleActions.exampleError(error));
  }
}
