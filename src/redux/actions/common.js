import {CLOSE_MODAL, SET_DATA, SET_FILE_URL, SET_ROLES, SHOW_MODAL} from "../../const";
import {getDataApi} from "../../api/api";
import {parseCsvToJson} from "../../utils/parseCsvToJson";
import {clearFilters} from "./filters";

export const setData = (data, headings) => ({type: SET_DATA, data, headings});
export const setRolesSuccess = (roles) => ({type: SET_ROLES, roles});
export const setModalData = (data) => ({type: SHOW_MODAL, data});
export const closeModal = () => ({type: CLOSE_MODAL});
export const setFileUrl = (fileUrl) => ({type: SET_FILE_URL, fileUrl});

export const setTableData = (url) => (dispatch, getState) => {
    return getDataApi(url)
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

            localStorage.setItem('storageData', JSON.stringify( getState().common.data ));

            dispatch( clearFilters() );
            dispatch( setData(data.data, data.headings) );
            dispatch( setRolesSuccess(roles) );
        })
};