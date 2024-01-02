import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  counterReducer : counterReducer,
  todoReducer : todoReducer,
});

export const store = createStore(rootReducer);
// export const store = createStore(rootReducer, composeWithDevTools());


