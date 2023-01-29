import { combineReducers } from "redux";
import entriesReducer from "./entries.reducer";
import modalsReducer from "./modals.reducer";

export default combineReducers({
  entries: entriesReducer,
  modals: modalsReducer,
});
