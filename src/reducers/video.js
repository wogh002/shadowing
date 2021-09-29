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

const dummyVideo = () => ({
    videoId: 'qw0_BhMRP-M',
      // endIndex:578,
    selectedIndex: 0,
    captions: [
        {
            text: 'EP.1',
            start: 17,
            duration: 2,
            curIndex: 0,
        },
        {
            text: 'ㅇㅋㄷㅋ',
            start: 80,
            duration: 3,
            curIndex: 1,
        },
        {
            text: '시원하군.',
            start: 90,
            duration: 4,
            curIndex: 2,
        },
        {
            text: '먹을거줄까 ?',
            start: 100,
            duration: 2,
            curIndex: 3,
        },
        {
            text: '네 주세요',
            start: 110,
            duration: 3,
            curIndex: 4,
        },
        {
            text: '알겠어 여기',
            start: 120,
            duration: 4,
            curIndex: 5,
        },
        {
            text: '감사합니다',
            start: 130,
            duration: 4,
            curIndex: 6,
        },
        {
            text: '근데 이거 맛이왜이래요?',
            start: 140,
            duration: 4,
            curIndex: 7,
        },
        {
            text: '상한거야',
            start: 150,
            duration: 4,
            curIndex: 8,
        },
        {
            text: 'ㅠㅠ너무하네요',
            start: 160,
            duration: 4,
            curIndex: 9,
        },
    ],
});

const dummyCaptions = [
    {
        text: '뭐가너무한데!!!!!!!',
        start: 170,
        duration: 2,
        curIndex: 10,
    },
    {
        text: '그냥 다!!!!!!',
        start: 180,
        duration: 3,
        curIndex: 11,
    },
    {
        text: '됐습니다.',
        start: 190,
        duration: 4,
        curIndex: 12,
    },
    {
        text: '아리가또',
        start: 200,
        duration: 2,
        curIndex: 13,
    },
    {
        text: '뭐가 아리가또?',
        start: 210,
        duration: 3,
        curIndex: 14,
    },
    {
        text: '고자이마ㅡ스',
        start: 220,
        duration: 4,
        curIndex: 15,
    },
    {
        text: '프론트엔드',
        start: 230,
        duration: 4,
        curIndex: 16,
    },
    {
        text: '핫핫',
        start: 240,
        duration: 4,
        curIndex: 17,
    },
    {
        text: '음',
        start: 250,
        duration: 4,
        curIndex: 18,
    },
    {
        text: '흠ㅎ믛믛',
        start: 260,
        duration: 4,
        curIndex: 19,
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
                // videoInfo: action.data,
                videoInfo: dummyVideo(),
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


