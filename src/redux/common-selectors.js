import {createSelector} from "reselect";
import {getFiltersValues} from "./filters-selectors";
import filterDataHelpers from "../utils/filterDataHelpers";

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


export const getChangesSuper = createSelector( getTableData, (data = null) => {

    let storageData = localStorage.getItem('storageData');
    if (!storageData ||  '[]' === storageData ||  'null' === storageData)
        return data;

    let lastDataTextsArr = JSON.parse(storageData).map( item => {
        return JSON.stringify(item);
    } );

    let currentDataTextsArr = data.map( item => {
        return JSON.stringify(item);
    } );

    let changesTextsArr = currentDataTextsArr.filter( item => {
        if (lastDataTextsArr.includes(item)) {
            return false;
        }
        return true;
    } );

    let changes = changesTextsArr.map( item => {
        return JSON.parse(item);
    } );

    localStorage.setItem('storageData', JSON.stringify(data));
    return changes;
});