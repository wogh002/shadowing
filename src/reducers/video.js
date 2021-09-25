export const LOAD_VIDEO_REQUEST = "LOAD_VIDEO_REQUEST";
export const LOAD_VIDEO_SUCCESS = "LOAD_VIDEO_SUCCESS";
export const LOAD_VIDEO_FAILURE = "LOAD_VIDEO_FAILURE";


// 유저의 인덱스 25번이라고 가정,
//20 21 22 23 24 25 26 27 28 29
//위로 5개 아래로 4개 서버에서 줄것.
export const LOAD_SCRIPT_REQUEST = "LOAD_SCRIPT_REQUEST";
export const LOAD_SCRIPT_SUCCESS = "LOAD_SCRIPT_SUCCESS";
export const LOAD_SCRIPT_FAILURE = "LOAD_SCRIPT_FAILURE";

export const CURRENT_INDEX_REQUEST = "CURRENT_INDEX_REQUEST";
export const CURRENT_INDEX_SUCCESS = "CURRENT_INDEX_SUCCESS";
export const CURRENT_INDEX_FAILURE = "CURRENT_INDEX_FAILURE";

// 내가 인덱스 하나줘야됌 (무한스크롤 ,스크롤 아래로 내렸을때 true, 
//위로 올렸을 때 false ,아래로 내리면 true, boolean 값과 같이 거기서의 마지막 index값도 같이줘야함)
export const SCROLL_SCRIPT_REQUEST = "SCROLL_SCRIPT_REQUEST";
export const SCROLL_SCRIPT_SUCCESS = "SCROLL_SCRIPT_SUCCESS";
export const SCROLL_SCRIPT_FAILURE = "SCROLL_SCRIPT_FAILURE";

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

const dummyCaptions = [
    {
        text: '달리십쇼 형님',
        start: 70,
        duration: 2,
    },
    {
        text: 'ㅇㅋㄷㅋ',
        start: 80,
        duration: 3,
    },
    {
        text: '시원하군.',
        start: 90,
        duration: 4,
    },
    {
        text: '먹을거줄까 ?',
        start: 100,
        duration: 2,
    },
    {
        text: '네 주세요',
        start: 110,
        duration: 3,
    },
    {
        text: '알겠어 여기',
        start: 120,
        duration: 4,
    },
    {
        text: '감사합니다',
        start: 130,
        duration: 4,
    },
    {
        text: '근데 이거 맛이왜이래요?',
        start: 140,
        duration: 4,
    },
    {
        text: '상한거야',
        start: 150,
        duration: 4,
    },
    {
        text: 'ㅠㅠ너무하네요',
        start: 160,
        duration: 4,
    },
]


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
                        [...state.videoInfo.captions, ...dummyCaptions]
                        :
                        [...dummyCaptions, ...state.videoInfo.captions]
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


