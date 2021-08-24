// redux combiner
import { combineReducers } from "redux";

// used reducers
import appReducer from "./appReducer";
import accountReducer from "./accountReducer";
import passwordReducer from "./passwordReducer";

// combined reducer
const rootReducer = combineReducers({
    password: passwordReducer,
    app: appReducer,
    acc: accountReducer
})

export default rootReducer