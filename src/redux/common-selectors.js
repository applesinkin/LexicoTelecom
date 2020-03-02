import {createSelector} from "reselect";
import {getFiltersValues} from "./filters-selectors";
import filterDataHelpers from "../utils/filterDataHelpers";

export const getFileUrl = (state) => state.common.url;
export const getTableData = (state) => state.common.data;
export const getChanges = (state) => state.common.changes;
export const getCommonHeadings = (state) => state.common.headings;
export const getRoles = (state) => state.common.roles;
export const getModalData = (state) => state.common.modalData;
export const getModalDisplayMode = (state) => state.common.showModal;

export const getCommonDataSuper = createSelector( getTableData, getFiltersValues, (data, filters) => {

    if (!data)
        return null;

    if (!filters.filter_by_roles && !filters.filter_by_text)
        return data;

    let resultData = [];

    if (filters.filter_by_roles) {
        let currentDataResults = resultData.length ? resultData[resultData.length - 1] : data;
        resultData.push( filterDataHelpers.filterByRole(currentDataResults, filters.filter_by_roles) );
    }

    if (filters.filter_by_text) {
        let currentDataResults = resultData.length ? resultData[resultData.length - 1] : data;
        resultData.push( filterDataHelpers.filterByText(currentDataResults, filters.filter_by_text) );
    }

    return resultData.length ? resultData[resultData.length - 1] : null;
} );

export const getModalDataSuper = createSelector(getModalData, (data) => {
    return data;
});