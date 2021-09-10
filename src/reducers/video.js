export const LOAD_VIDEO_REQUEST = "LOAD_VIDEO_REQUEST";
export const LOAD_VIDEO_SUCCESS = "LOAD_VIDEO_SUCCESS";
export const LOAD_VIDEO_FAILURE = "LOAD_VIDEO_FAILURE";
// selected 된 video 있을때  video_id 넘겨주자
export const LOAD_SCRIPT_REQUEST = "LOAD_SCRIPT_REQUEST";
export const LOAD_SCRIPT_SUCCESS = "LOAD_SCRIPT_SUCCESS";
export const LOAD_SCRIPT_FAILURE = "LOAD_SCRIPT_FAILURE";
// 유저가 스크립트 대사 클릭 했을 경우 curIndex 값 넘겨줘야함
export const SEND_CURRENT_INDEX_REQUEST = "SEND_CURRENT_INDEX_REQUEST";
export const SEND_CURRENT_INDEX_SUCCESS = "SEND_CURRENT_INDEX_SUCCESS";
export const SEND_CURRENT_INDEX_FAILURE = "SEND_CURRENT_INDEX_FAILURE";
// 무한스크롤 할 때  default 대사10개  20개 30 ...60 등등
export const LOAD_USER_SCRIPT_REQUEST = "LOAD_USER_SCRIPT_REQUEST";
export const LOAD_USER_SCRIPT_SUCCESS = "LOAD_USER_SCRIPT_SUCCESS";
export const LOAD_USER_SCRIPT_FAILURE = "LOAD_USER_SCRIPT_FAILURE";

const dummyVideo = () => ({
    videoId: 'qw0_BhMRP-M',
    curIndex: 0,
    captions: [
        { //curIndex : 0
            script: '달리십쇼 형님',
            start: 0,
            dur: 22,
        },
        {
            //curIndex : 1
            script: '오냐 달릴게!!',
            start: 23,
            dur: 10,
        },
    ],
});

const initalState = {
    videos: null,
    loadVideoLoading: false,
    loadVideoDone: false,
    loadVideoError: false,

    videoInfo: null,
    selectedVideo: false,
    loadScriptLoading: false,
    loadScriptDone: false,
    loadScriptError: false,
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOAD_VIDEO_REQUEST:
            return {
                ...state,
                loadVideoLoading: true,
                loadVideoDone: false,
                loadVideoError: false,
            }
        case LOAD_VIDEO_SUCCESS:
            return {
                ...state,
                loadVideoLoading: false,
                loadVideoDone: true,
                videos: action.data,
            }
        case LOAD_VIDEO_FAILURE:
            return {
                ...state,
                loadVideoLoading: false,
                loadVideoError: action.error,
            }
        case LOAD_SCRIPT_REQUEST:
            return {
                ...state,
                loadScriptLoading: true,
                loadScriptDone: false,
                loadScriptError: false,
                selectedVideo: false,
            }
        case LOAD_SCRIPT_SUCCESS:
            return {
                //민수보고 videoCaptions 에 video ID도 같이 넣어달라하자 
                ...state,
                loadScriptLoading: false,
                loadScriptDone: true,
                videoInfo: dummyVideo(),
                selectedVideo: true,
            }
        case LOAD_SCRIPT_FAILURE:
            return {
                ...state,
                loadScriptLoading: false,
                loadScriptDone: false,
                loadScriptError: action.error,
            }
        default: return state;
    }

}
export default reducer;


