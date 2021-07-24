import { combineReducers, createStore } from "redux";
import mainReducer from "./main-reducer"
import navReducer from "./nav-reducer"

let reducers = combineReducers({
    mainReducer,
    navReducer
});
let store = createStore(reducers);

export default store;