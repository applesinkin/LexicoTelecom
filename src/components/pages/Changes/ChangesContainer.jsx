import React from "react";
import {connect} from "react-redux";
import Changes from "./Changes";
import {getChangesSuper, getCommonHeadings, getModalDataSuper, getModalDisplayMode} from "../../../redux/selectors/common";
import {closeModal, setModalData} from "../../../redux/actions/common";

class ChangesContainer extends React.Component {
    render() {
        return <Changes {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        tableDataChanges: getChangesSuper(state),
        tableHeadings: getCommonHeadings(state),
        modalData: getModalDataSuper(state),
        isModalActive: getModalDisplayMode(state)
    }
};

export default connect(mapStateToProps, {
    setModalData,
    closeModal
})(ChangesContainer);