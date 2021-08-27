// redux combiner
import { combineReducers } from "redux";

// used reducers
import appReducer from "./appReducer";
import passwordReducer from "./passwordReducer";

// combined reducer
const rootReducer = combineReducers({
    password: passwordReducer, // here the objects of 'records' are stored
    app: appReducer,
})

export default rootReducer