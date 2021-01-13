import {CLEAR_FILTERS, SET_FILTER} from "../../const";

export const setFilter = (name, value) => ({type: SET_FILTER, name, value});
export const clearFilters = () => ({type: CLEAR_FILTERS});