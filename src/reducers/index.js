import { combineReducers } from "redux";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
	room: reducer,
});
