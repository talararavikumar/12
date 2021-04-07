import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { empReducer as employees } from "./employeeReducer";
import { leaveReducer as Leaves } from "./leavesReducer";

const reducer = combineReducers({
  employees,
  Leaves
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
