import { all, fork } from 'redux-saga/effects';
import user from './user';
import video from './video';
export default function* rootSaga() {
    yield all([
        fork(user),
        fork(video),
    ])
}