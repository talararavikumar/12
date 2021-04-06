import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import empReducer from "./reducers";
const store = createStore(empReducer, applyMiddleware(thunk));
export default store;
