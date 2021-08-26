import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import { CHECK_ID_FAILURE, CHECK_ID_REQUEST, CHECK_ID_SUCCESS } from '../reducers/user';
import axios from '../service/axios';
const checkIdAPI = (data) => {
    return axios.post(`/signup/checkid`, data);
}
function* checkId(action) {
    try {
        // 동기 await 같은 느낌
        const result = yield call(checkIdAPI, action.data);
        yield delay(1000);
        yield put({
            type: CHECK_ID_SUCCESS,
            data: action.data
        });
    } catch (error) {
        yield delay(1000);
        yield put({
            type: CHECK_ID_FAILURE,
            data: error.response.data
        })
    }
}
function* watchCheckId() {
    yield takeLatest(CHECK_ID_REQUEST, checkId);
}
export default function* userSaga() {
    yield all([
        fork(watchCheckId),
    ])
}