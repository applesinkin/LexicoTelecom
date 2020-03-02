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
import {getFiltersValues} from "../../../redux/filters-selectors";
import {setFilter} from "../../../redux/filters-reducer";

class DataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.toggler = true;
    }

    handleSetTableData = (dataUrl) => {
        let url = this.toggler ? 'http://localhost:3000/csv/file.csv' : 'http://localhost:3000/csv/file-changed.csv';
        this.toggler = !this.toggler;

        this.props.setTableData(url)
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
    setFilter,
    setModalData,
    closeModal
})(DataContainer);