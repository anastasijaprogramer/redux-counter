//combine all reducers
import counterReducer from "./counter";
import IsLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    IsLoggedReducer,
})

export default allReducers