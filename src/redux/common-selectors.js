import {createSelector} from "reselect";
import {getFilteredResultsSelector} from "./filters-selectors";

export const getFileUrl = (state) => state.common.url;
export const getTableData = (state) => state.common.data;
export const getChanges = (state) => state.common.changes;
export const getCommonHeadings = (state) => state.common.headings;
export const getRoles = (state) => state.common.roles;
export const getModalData = (state) => state.common.modalData;
export const getModalDisplayMode = (state) => state.common.showModal;

export const getCommonDataSuper = createSelector( getTableData, getFilteredResultsSelector, (data, filteredData) => {
    let resultData = filteredData ? filteredData : data;
    return resultData;
} );

export const getModalDataSuper = createSelector(getModalData, (data) => {
    return data;
});