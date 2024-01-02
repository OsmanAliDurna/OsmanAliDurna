import { counterReducer } from "./counterReducer";
import {legacy_createStore as createStore} from "redux"

export const store = createStore(counterReducer)