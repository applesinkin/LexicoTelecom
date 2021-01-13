import common from "./common";
import filters from "./filters";
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

export default combineReducers({
    common: common,
    filters: filters,
    form: formReducer
})