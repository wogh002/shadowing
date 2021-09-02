import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import {
    CHECK_ID_FAILURE, CHECK_ID_REQUEST, CHECK_ID_SUCCESS,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS
} from '../reducers/user';
import axios from '../service/axios';
const checkIdAPI = (data) => {
    return axios.post('/user/checkId', data);
}
const signUpAPI = data => {
    return axios.post('/user/join', data);
}
const logInAPI = data => {
    return axios.post('/user/login', data);
}
const logOutAPI = () => {
    return axios.get('/user/logout');
}
const loadUserAPI = () => {
    return axios.get('/user/loadUser');
}
function* checkId(action) {
    try {
        yield delay(1000);
        yield call(checkIdAPI, action.data);
        yield put({
            type: CHECK_ID_SUCCESS,
        });
    } catch (error) {
        console.log(error.response.data);
        yield put({
            type: CHECK_ID_FAILURE,
            error: error.response.data
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
        yield put({
            type: SIGN_UP_FAILURE,
            error: error.response.data
        })
    }
}
function* logIn(action) {
    //action.data 에는 {id,pw}
    try {
        const result = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOGIN_SUCCESS,
            data: result.data
        });
    } catch (error) {
        console.log(error);
        // error id pw 다를 경우 
        yield put({
            type: LOGIN_FAILURE,
            error: error.response.data
        })
    }
}
function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOGOUT_SUCCESS,
        });
    } catch (error) {
        yield put({
            type: LOGOUT_FAILURE,
            error: error.response.data
        })
    }
}
function* loadUser() {
    try {
        const result = yield call(loadUserAPI);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        yield put({
            type: LOAD_USER_FAILURE,
            error: error.response.data
        })
    }
}

function* watchCheckId() {
    yield takeLatest(CHECK_ID_REQUEST, checkId);
}
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLogIn() {
    yield takeLatest(LOGIN_REQUEST, logIn);
}
function* watchLogOut() {
    yield takeLatest(LOGOUT_REQUEST, logOut);
}
function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}
export default function* userSaga() {
    yield all([
        fork(watchCheckId),
        fork(watchSignUp),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchLoadUser),
    ])
}