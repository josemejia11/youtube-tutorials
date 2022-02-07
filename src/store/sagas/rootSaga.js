import { takeLatest } from 'redux-saga/effects';
import { handleGetUser } from './handlers/user';
import { GET_USER } from '../redux/user';

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser)
}