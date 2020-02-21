import {applyMiddleware, combineReducers, createStore} from "redux";
import commonReducer from "./common-reducer";
import filtersReducer from "./filters-reducer";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    common: commonReducer,
    filters: filtersReducer,
    form: formReducer
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));