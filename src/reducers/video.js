export const LOAD_VIDEO_REQUEST = "LOAD_VIDEO_REQUEST";
export const LOAD_VIDEO_SUCCESS = "LOAD_VIDEO_SUCCESS";
export const LOAD_VIDEO_FAILURE = "LOAD_VIDEO_FAILURE";
export const LOAD_SCRIPT_REQUEST = "LOAD_SCRIPT_REQUEST";
export const LOAD_SCRIPT_SUCCESS = "LOAD_SCRIPT_SUCCESS";
export const LOAD_SCRIPT_FAILURE = "LOAD_SCRIPT_FAILURE";
export const CURRENT_INDEX_REQUEST = "CURRENT_INDEX_REQUEST";
export const CURRENT_INDEX_SUCCESS = "CURRENT_INDEX_SUCCESS";
export const CURRENT_INDEX_FAILURE = "CURRENT_INDEX_FAILURE";
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
        case CURRENT_INDEX_REQUEST:
            return {
                ...state,
                sendIndexDone: false,
                sendIndexError: false,
            }
        case CURRENT_INDEX_SUCCESS:
            return {
                ...state,
                sendIndexDone: true,
                videoInfo: {
                    ...state.videoInfo,
                    selectedIndex: action.data,
                }
            }
        case CURRENT_INDEX_FAILURE:
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


