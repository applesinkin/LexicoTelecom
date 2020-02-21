import React from "react";
import {connect} from "react-redux";
import Data from "./Data";
import {closeModal, setModalData, setTableData} from "../../../redux/common-reducer";
import {
    getFileUrl,
    getModalDataSuper, getModalDisplayMode,
    getRoles,
    getCommonDataSuper,
    getCommonHeadings
} from "../../../redux/common-selectors";
import {getFilteredResults} from "../../../redux/filters-reducer";
import {getFiltersValues} from "../../../redux/filters-selectors";

class DataContainer extends React.Component {
    constructor(props) {
        super(props);
        // this.toggler = true;
    }

    handleSetTableData = (dataUrl) => {
        // let url = this.toggler ? 'http://localhost:3000/csv/file.csv' : 'http://localhost:3000/csv/file-changed.csv';
        // this.toggler = !this.toggler;

        this.props.setTableData(dataUrl)
    };

    render() {

        return (
            <Data {...this.props} handleSetTableData={this.handleSetTableData}/>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        fileUrl: getFileUrl(state),
        tableData: getCommonDataSuper(state),
        tableHeadings: getCommonHeadings(state),
        roles: getRoles(state),
        modalData: getModalDataSuper(state),
        isModalActive: getModalDisplayMode(state),
        filtersValues: getFiltersValues(state)
    }
};

export default connect(mapStateToProps, {
    setTableData,
    getFilteredResults,
    setModalData,
    closeModal
})(DataContainer);