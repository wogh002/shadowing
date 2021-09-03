export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const CHECK_ID_RESET = "CHECK_ID_RESET";
export const CHECK_ID_REQUEST = "CHECK_ID_REQUEST";
export const CHECK_ID_SUCCESS = "CHECK_ID_SUCCESS";
export const CHECK_ID_FAILURE = "CHECK_ID_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const checkIdRequestAction = (data) => ({ type: CHECK_ID_REQUEST, data });
const initalState = {
    me: null,
    loadUserLoading: false,
    loadUserDone: false,
    loadUserError: false,
    checkIdLoading: false, //중복 체크 시도중
    checkIdDone: false,
    checkIdError: false,
    isCheckIdPass: false, //중복id 있는지 없는지
    signUpLoading: false,//회원가입 시도중
    signUpDone: false,
    signUpError: false,
    logInLoading: false,//로그인 시도중
    logInDone: false,
    logInError: false,
    logOutLoading: false, //로그아웃 시도중
    logOutDone: false,
    logOutError: false,
}

//이전 상태를 최신 상태로 교체
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOAD_USER_REQUEST:
            return {
                ...state,
                loadUserLoading: true,
                loadUserDone: false,
                loadUserError: false,
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                me: action.data,
                loadUserLoading: false,
                loadUserDone: true,
            }
        case LOAD_USER_FAILURE:
            return {
                ...state,
                loadUserLoading: false,
                loadUserError: action.error,
            }
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
                checkIdDone: true, //id check 했으면 true
                isCheckIdPass: true,
                //가입가능하면 true 중복된 아이디 있으면 false,
            }
        case CHECK_ID_FAILURE:
            return {
                ...state,
                checkIdDone: true,
                checkIdLoading: false,
                isCheckIdPass: false,
                checkIdError: action.error,
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
                signUpError: action.error,
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                logInLoading: true,
                logInDone: false,
                logInError: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                me: action.data,
                logInLoading: false,
                logInDone: true,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                logInLoading: false,
                logInError: action.error,
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                logOutLoading: true,
                logOutDone: false,
                logOutError: false,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                me: null,
                logOutLoading: false,
                logOutDone: true,
                logInDone: false,
            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                logOutLoading: false,
                logOutError: action.error,
            }

        default: return state;
    }
}
export default reducer;
