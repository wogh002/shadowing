import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import {
    LOAD_VIDEO_REQUEST, LOAD_VIDEO_SUCCESS, LOAD_VIDEO_FAILURE, LOAD_SCRIPT_REQUEST, LOAD_SCRIPT_SUCCESS, LOAD_SCRIPT_FAILURE
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
// const loadScriptAPI = data => {
//     return axios.post('/video/loadscript', data);
// }
function* loadVideo() {
    try {
        // call  === await
        const result = yield call(loadVideoAPI);
        console.log(result);
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
    // action.data => {videoId : "X7LtWe8FXkc"}; "qw0_BhMRP-M"
    console.log(action.data);
    try {
        // const result = yield call(loadScriptAPI, action.data);
        yield put({
            type: LOAD_SCRIPT_SUCCESS,
            // data: result.data
        });
    } catch (error) {
        yield put({
            type: LOAD_SCRIPT_FAILURE,
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
export default function* videoSaga() {
    yield all([
        fork(watchLoadVideo),
        fork(watchLoadScript),
    ])
}