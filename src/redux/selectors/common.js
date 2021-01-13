import {createSelector} from "reselect";
import {getFiltersValues} from "./filters";
import {filterByRole, filterByText} from "../../utils/filterDataHelpers";

export const getFileUrl = (state) => state.common.url;
export const getTableData = (state) => state.common.data;
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
        resultData.push( filterByRole(currentDataResults, filters.filter_by_roles) );
    }

    if (filters.filter_by_text) {
        let currentDataResults = resultData.length ? resultData[resultData.length - 1] : data;
        resultData.push( filterByText(currentDataResults, filters.filter_by_text) );
    }

    return resultData.length ? resultData[resultData.length - 1] : null;
} );

export const getModalDataSuper = createSelector(getModalData, (data) => {
    return data;
});


export const getChangesSuper = createSelector( getTableData, (data = null) => {

    if (!data)
        return null;

    let storageData = localStorage.getItem('storageData');
    if (!storageData ||  '[]' === storageData ||  'null' === storageData)
        return data;

    let storageDataRows = JSON.parse(storageData).map( row => {
        return JSON.stringify(row);
    } );
    let storageDataRowsSet = new Set(storageDataRows);
    let currentDataRows = data.map( row => {
        return JSON.stringify(row);
    } );
    let changedDataRows = currentDataRows.filter( row => {
        if ( storageDataRowsSet.has(row) ) {
            return false;
        }
        return true;
    } );
    let changedData = changedDataRows.map( row => {
        return JSON.parse(row);
    } );
    return changedData;
});