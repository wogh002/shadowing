import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import {
    LOAD_VIDEO_REQUEST, LOAD_VIDEO_SUCCESS, LOAD_VIDEO_FAILURE
} from '../reducers/video';
import axios from '../service/youtube/axios';
const loadVideoAPI = () => {
    return axios.get('/playlistItems', {
        params: {
            part: 'snippet',
            maxResults: 1,
            playlistId: 'PL3sjBeY9l6eBglNrW3dH9doWdu8foy6Q3',
        }
    })
}
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
function* watchLoadVideo() {
    yield takeLatest(LOAD_VIDEO_REQUEST, loadVideo);
}
export default function* videoSaga() {
    yield all([
        fork(watchLoadVideo),
    ])
}