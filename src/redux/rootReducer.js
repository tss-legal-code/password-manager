// redux combiner
import { combineReducers } from "redux";

// used reducers
import appReducer from "./appReducer";
import passwordReducer from "./passwordReducer";

// combined reducer
const rootReducer = combineReducers({
    password: passwordReducer,
    app: appReducer,
})

export default rootReducer