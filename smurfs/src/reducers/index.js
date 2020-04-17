import { combineReducers } from "redux";
import { dataReducer, addReducer } from "./dataReducer";

export const rootReducer = combineReducers({
  dataReducer,
  addReducer,
});
