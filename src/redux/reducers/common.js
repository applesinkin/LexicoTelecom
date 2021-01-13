import {
    CLOSE_MODAL,
    SET_DATA,
    SET_FILE_URL,
    SET_ROLES,
    SHOW_MODAL
} from "../../const";

const initialState = {
    url: "https://mindless-corps.000webhostapp.com/file.csv",
    data: null,
    changes: null,
    headings: null,
    roles: [],
    modalData: null,
    showModal: false,
};

const common = (state = initialState, action) => {

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

export default common;