const SET_FILTER = 'mindless/search/SET_FILTER';
const CLEAR_FILTERS = 'mindless/search/CLEAR_FILTERS';

const initialState = {
    filters: {
        filter_by_roles: "",
        filter_by_text: ""
    }
};

const filtersReducer = (state = initialState, action) => {
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

export const setFilter = (name, value) => ({type: SET_FILTER, name, value});
export const clearFilters = () => ({type: CLEAR_FILTERS});

export default filtersReducer;
