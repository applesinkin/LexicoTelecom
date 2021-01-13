import {CLEAR_FILTERS, SET_FILTER} from "../../const";

const initialState = {
    filters: {
        filter_by_roles: "",
        filter_by_text: ""
    }
};

const filters = (state = initialState, action) => {
    switch (action.type) {

        case SET_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.name]: action.value,
                }
            };

        case CLEAR_FILTERS:

            return {
                ...state,
                filters: {
                    ...state.filters,
                    filter_by_roles: "",
                    filter_by_text: ""
                }
            };

        default:
            return state;
    }
};

export default filters;
