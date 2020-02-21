import filterDataHelpers from "../utils/filterDataHelpers";

const SET_SEARCH_RESULTS = 'mindless/search/SET_SEARCH_RESULTS';
const SET_FILTER = 'mindless/search/SET_FILTER';
const CLEAR_FILTERS = 'mindless/search/CLEAR_FILTERS';

const initialState = {
    results: null,
    filters: {
        filter_by_roles: "",
        filter_by_text: ""
    },
    textTimer: null
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SEARCH_RESULTS:
            return {
                ...state,
                results: action.data
            };

        case SET_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.name]: action.value,
                }
            };

        case CLEAR_FILTERS:

            console.log(state.filters);

            return {
                ...state,
                results: null,
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

export const setResultsSuccess = (data) => ({type: SET_SEARCH_RESULTS, data});

export const setFilter = (name, value) => ({type: SET_FILTER, name, value});
export const clearFilters = () => ({type: CLEAR_FILTERS});

export const getFilteredResults = (name, value) => (dispatch, getState) => {
    dispatch( setFilter(name, value) );

    const data = getState().common.data;
    if (!data)
        return;

    const filters = getState().filters.filters;
    const clonedData = [...data];

    let resultData = [];

    if (filters.filter_by_roles) {
        let currentDataResults = resultData.length ? resultData[resultData.length - 1] : clonedData;
        let data = filterDataHelpers.filterByRole(currentDataResults, filters.filter_by_roles);
        resultData.push(data);
    }

    if (filters.filter_by_text) {
        let currentDataResults = resultData.length ? resultData[resultData.length - 1] : clonedData;
        let data = filterDataHelpers.filterByText(currentDataResults, filters.filter_by_text);
        resultData.push(data);
    }

    dispatch( setResultsSuccess(resultData[resultData.length - 1]) );
};

export default filtersReducer;
