export const LOAD_VIDEO_REQUEST = "LOAD_VIDEO_REQUEST";
export const LOAD_VIDEO_SUCCESS = "LOAD_VIDEO_SUCCESS";
export const LOAD_VIDEO_FAILURE = "LOAD_VIDEO_FAILURE";
export const LOAD_SCRIPT_REQUEST = "LOAD_SCRIPT_REQUEST";
export const LOAD_SCRIPT_SUCCESS = "LOAD_SCRIPT_SUCCESS";
export const LOAD_SCRIPT_FAILURE = "LOAD_SCRIPT_FAILURE";
export const CURRENT_INDEX_REQUEST = "CURRENT_INDEX_REQUEST";
export const CURRENT_INDEX_SUCCESS = "CURRENT_INDEX_SUCCESS";
export const CURRENT_INDEX_FAILURE = "CURRENT_INDEX_FAILURE";
export const SCROLL_SCRIPT_REQUEST = "SCROLL_SCRIPT_REQUEST";
export const SCROLL_SCRIPT_SUCCESS = "SCROLL_SCRIPT_SUCCESS";
export const SCROLL_SCRIPT_FAILURE = "SCROLL_SCRIPT_FAILURE";
// const dummyVideo = () => ({
//     videoId: 'qw0_BhMRP-M',
//     endIndex:578,
//     selectedIndex: 0,
//     captions: [
//         {
//             text: 'EP.1',
//             start: 17,
//             duration: 2,
//             curIndex: 0,
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

    scrollScriptLoading: false,
    scrollScriptDone: false,
    scrollScriptError: false,

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
        case SCROLL_SCRIPT_REQUEST:
            return {
                ...state,
                scrollScriptLoading: true,
                scrollScriptDone: false,
                scrollScriptError: false,
            }
        case SCROLL_SCRIPT_SUCCESS:
            return {
                ...state,
                scrollScriptLoading: false,
                scrollScriptDone: true,
                videoInfo: {
                    ...state.videoInfo,
                    captions: action.data.scrollDirection
                        ?
                        [...state.videoInfo.captions, ...action.data.captions]
                        :
                        [...action.data.captions, ...state.videoInfo.captions]
                }
            }
        case SCROLL_SCRIPT_FAILURE:
            return {
                ...state,
                scrollScriptLoading: false,
                scrollScriptError: action.error,
            }
        default: return state;
    }
}
export default reducer;


