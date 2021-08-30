export const CHECK_ID_RESET = "CHECK_ID_RESET";
export const CHECK_ID_REQUEST = "CHECK_ID_REQUEST";
export const CHECK_ID_SUCCESS = "CHECK_ID_SUCCESS";
export const CHECK_ID_FAILURE = "CHECK_ID_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const checkIdRequestAction = (data) => ({ type: CHECK_ID_REQUEST, data });
const initalState = {
    id: 1, //DB ID
    me: null,
    signUpLoading: false,//회원가입 시도중
    signUpDone: false,
    signUpError: false,
    checkIdLoading: false, //중복 체크 시도중
    checkIdDone: false,
    checkIdError: false,
    isCheckIdPass: false, //중복id 있는지 없는지
}
//이전 상태를 최신 상태로 교체
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case CHECK_ID_RESET:
            return {
                ...state,
                checkIdLoading: false,
                checkIdDone: false,
                checkIdError: false,
                isCheckIdPass: false,
            }
        case CHECK_ID_REQUEST:
            return {
                ...state,
                checkIdLoading: true,
                checkIdDone: false,
                checkIdError: false,
                isCheckIdPass: false,
            }
        case CHECK_ID_SUCCESS:
            return {
                ...state,
                checkIdLoading: false,
                checkIdDone: true,
                //가입가능하면 true 중복된 아이디 있으면 false,
                isCheckIdPass: true,
            }
        case CHECK_ID_FAILURE:
            return {
                ...state,
                checkIdLoading: false,
                checkIdError: true,
            }
        case SIGN_UP_REQUEST:
            return {
                ...state,
                signUpLoading: true,
                signUpDone: false,
                signUpError: false,
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpLoading: false,
                // 회원가입 성공시 true 실패시 false
                signUpDone: true,
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signUpLoading: false,
                signUpError: true,
            }
        default: return state;
    }
}
export default reducer;
