export const LOAD_VIDEO_REQUEST = "LOAD_VIDEO_REQUEST";
export const LOAD_VIDEO_SUCCESS = "LOAD_VIDEO_SUCCESS";
export const LOAD_VIDEO_FAILURE = "LOAD_VIDEO_FAILURE";
// selected 된 video 있을때  video_id 넘겨주자
export const LOAD_SCRIPT_REQUEST = "LOAD_SCRIPT_REQUEST";
export const LOAD_SCRIPT_SUCCESS = "LOAD_SCRIPT_SUCCESS";
export const LOAD_SCRIPT_FAILURE = "LOAD_SCRIPT_FAILURE";
// 유저가 스크립트 대사 클릭 했을 경우 curIndex 값 넘겨줘야함
//넘겨주면 서버에서 videoInfo 꾸며서 나에게 응답.
export const SEND_CURRENT_INDEX_REQUEST = "SEND_CURRENT_INDEX_REQUEST";
export const SEND_CURRENT_INDEX_SUCCESS = "SEND_CURRENT_INDEX_SUCCESS";
export const SEND_CURRENT_INDEX_FAILURE = "SEND_CURRENT_INDEX_FAILURE";
// 내가 인덱스 하나줘야됌 (무한스크롤 ,스크롤 아래로 내렸을때 true, 위로 올렸을 때 false)
export const LOAD_USER_SCRIPT_REQUEST = "LOAD_USER_SCRIPT_REQUEST";
export const LOAD_USER_SCRIPT_SUCCESS = "LOAD_USER_SCRIPT_SUCCESS";
export const LOAD_USER_SCRIPT_FAILURE = "LOAD_USER_SCRIPT_FAILURE";

// const dummyVideo = () => ({
//     videoId: 'qw0_BhMRP-M',
//     selectedIndex: 0,
//     captions: [
//         {
//             text: '달리십쇼 형님',
//             start: 0,
//             duration: 2,
//         },
//     ],
// });

const initalState = {
    videos: null,
    loadVideoLoading: false,
    loadVideoDone: false,
    loadVideoError: false,

    videoInfo: null,
    loadScriptLoading: false,
    loadScriptDone: false,
    loadScriptError: false,

    sendIndexDone: false,
    sendIndexError: false,

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
            }
        case LOAD_SCRIPT_SUCCESS:
            return {
                ...state,
                loadScriptLoading: false,
                loadScriptDone: true,
                videoInfo: action.data,
            }
        case LOAD_SCRIPT_FAILURE:
            return {
                ...state,
                loadScriptLoading: false,
                loadScriptError: action.error,
            }
        case SEND_CURRENT_INDEX_REQUEST:
            return {
                ...state,
                sendIndexDone: false,
                sendIndexError: false,
            }
        case SEND_CURRENT_INDEX_SUCCESS:
            return {
                ...state,
                sendIndexDone: true,
                videoInfo: {
                    ...state.videoInfo,
                    selectedIndex: action.data,
                }
            }
        case SEND_CURRENT_INDEX_FAILURE:
            return {
                ...state,
                sendIndexError: action.error
            }

        default: return state;
    }
    // videoInfo: {
    //     videoId: action.data.videoId,
    //     selectedIndex: action.data.selectedIndex,
    //     captions: [...state.videoInfo.captions, ...action.data.captions]
    //      captions :  true ? [] : []
    // }
}
export default reducer;


