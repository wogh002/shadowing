import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import {
    LOAD_VIDEO_REQUEST,
    LOAD_VIDEO_SUCCESS,
    LOAD_VIDEO_FAILURE,
    LOAD_SCRIPT_REQUEST,
    LOAD_SCRIPT_SUCCESS,
    LOAD_SCRIPT_FAILURE,
    CURRENT_INDEX_REQUEST,
    CURRENT_INDEX_SUCCESS,
    CURRENT_INDEX_FAILURE
} from '../reducers/video';
import youtube from '../service/youtube/axios';
import axios from '../service/axios';
const loadVideoAPI = () => {
    return youtube.get('/playlistItems', {
        params: {
            part: 'snippet',
            maxResults: 2,
            playlistId: 'PL3sjBeY9l6eBglNrW3dH9doWdu8foy6Q3',
        }
    })
}
const loadScriptAPI = (data) => {
    return axios.get(`/video/loadscript/${data}`);
}
//const loadCurIndexAPI = data => {
//  return axios.post('/video/loadCurIndex',data);
//}
function* loadVideo() {
    try {
        // call  === await
        const result = yield call(loadVideoAPI);
        yield put({
            type: LOAD_VIDEO_SUCCESS,
            data: result.data.items,
        });
    } catch (error) {
        yield put({
            type: LOAD_VIDEO_FAILURE,
            error: error.response.data
        })
    }
}
function* loadScript(action) {
    try {
        const result = yield call(loadScriptAPI, action.data);
        yield put({
            type: LOAD_SCRIPT_SUCCESS,
            data: result.data
        });
    } catch (error) {
        yield put({
            type: LOAD_SCRIPT_FAILURE,
            error: error.response.data
        })
    }
}
function* loadCurIndex(action) {
    try {
        const result = yield call(loadCurIndexAPI, action.data);
        yield put({
            type: CURRENT_INDEX_SUCCESS,
            data: result.data
        });
    } catch (error) {
        yield put({
            type: CURRENT_INDEX_FAILURE,
            error: error.response.data
        })
    }
}
function* watchLoadVideo() {
    yield takeLatest(LOAD_VIDEO_REQUEST, loadVideo);
}
function* watchLoadScript() {
    yield takeLatest(LOAD_SCRIPT_REQUEST, loadScript);
}
function* watchLoadCurIndex() {
    yield takeLatest(CURRENT_INDEX_REQUEST, loadCurIndex);
}
export default function* videoSaga() {
    yield all([
        fork(watchLoadVideo),
        fork(watchLoadScript),
        fork(watchLoadCurIndex),
    ])
}