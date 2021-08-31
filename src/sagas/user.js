import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import {
    CHECK_ID_FAILURE, CHECK_ID_REQUEST, CHECK_ID_SUCCESS,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS
} from '../reducers/user';
import axios from '../service/axios';
const checkIdAPI = (data) => {
    return axios.post('/user/checkId', data);
}
const signUpAPI = data => {
    return axios.post('/user/join', data);
}
function* checkId(action) {
    try {
        yield delay(1000);
        const result = yield call(checkIdAPI, action.data);
        yield put({
            type: CHECK_ID_SUCCESS,
            data: result.data.check
            // id가 없다면 true , 있다면 false.
        });
    } catch (error) {
        yield put({
            type: CHECK_ID_FAILURE,
            data: error.response.data
        })
    }
}
function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data.check
        });
    } catch (error) {
        yield delay(1000);
        yield put({
            type: SIGN_UP_FAILURE,
            data: error.response.data
        })
    }
}
function* watchCheckId() {
    yield takeLatest(CHECK_ID_REQUEST, checkId);
}
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga() {
    yield all([
        fork(watchCheckId),
        fork(watchSignUp),
    ])
}