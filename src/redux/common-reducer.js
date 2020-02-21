import {commonDataApi} from "../api/api";
import {parseCsvToJson} from "../utils/parseCsvToJson";
import {clearFilters} from "./filters-reducer";

const SET_DATA = 'mindless/common/SET_DATA';
const SET_CHANGES = 'mindless/common/SET_CHANGES';
const SET_ROLES = 'mindless/common/SET_ROLES';
const SHOW_MODAL = 'mindless/common/SHOW_MODAL';
const CLOSE_MODAL = 'mindless/common/CLOSE_MODAL';
const SET_FILE_URL = 'mindless/common/SET_FILE_URL';

const initialState = {
    url: "https://mindless-corps.000webhostapp.com/file.csv",
    data: null,
    changes: null,
    headings: null,
    roles: [],
    modalData: null,
    showModal: false,
};

const commonReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_DATA:
            return {
                ...state,
                data: action.data,
                headings: action.headings,
            };

        case SET_ROLES:
            return {
                ...state,
                roles: action.roles
            };

        case SET_FILE_URL:
            return {
                ...state,
                url: action.fileUrl
            };

        case SET_CHANGES:
            return {
                ...state,
                changes: action.data
            }

        case SHOW_MODAL:
            return {
                ...state,
                modalData: action.data,
                showModal: true
            };

        case CLOSE_MODAL:
            return {
                ...state,
                modalData: null,
                showModal: false
            };

        default:
            return state;
    }
};

export const setData = (data, headings) => ({type: SET_DATA, data, headings});
export const setChanges = (data) => ({type: SET_CHANGES, data});
export const setRolesSuccess = (roles) => ({type: SET_ROLES, roles});
export const setModalData = (data) => ({type: SHOW_MODAL, data});
export const closeModal = () => ({type: CLOSE_MODAL});
export const setFileUrl = (fileUrl) => ({type: SET_FILE_URL, fileUrl});


export const setTableDataChanges = (data) => (dispatch) => {
    let lastTableDataPlane = localStorage.getItem('lastTableData');
    if (!lastTableDataPlane ||  '[]' === lastTableDataPlane) {
        localStorage.setItem('lastTableData', JSON.stringify(data));
        dispatch(setChanges(data));
        return;
    }
    let lastDataTextsArr = JSON.parse(lastTableDataPlane).map( item => {
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
    localStorage.setItem('lastTableData', JSON.stringify(data));
    dispatch(setChanges(changes));
};


export const setTableData = (url) => (dispatch) => {

    return commonDataApi.getData(url)
        .then( (r) => r.text())
        .then(response => {
            if (!response)
                return;

            const data = parseCsvToJson(response);

            const roles = [];
            data.data.forEach( data => {
                if (data.role && !roles.includes(data.role))
                    roles.push(data.role);
            } );

            dispatch( clearFilters() );
            dispatch( setTableDataChanges(data.data) );
            dispatch( setData(data.data, data.headings) );
            dispatch( setRolesSuccess(roles) );
        })
};

export default commonReducer;