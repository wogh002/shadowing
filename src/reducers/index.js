import { combineReducers } from "redux";
import user from "./user";
import video from "./video";
const rootReducer = combineReducers({
    user,
    video
});
export default rootReducer;
