import React from "react";
import {connect} from "react-redux";
import Changes from "./Changes";
import {getChanges, getCommonHeadings, getModalDataSuper, getModalDisplayMode} from "../../../redux/common-selectors";
import {closeModal, setModalData} from "../../../redux/common-reducer";

class ChangesContainer extends React.Component {
    render() {
        return <Changes {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        tableDataChanges: getChanges(state),
        tableHeadings: getCommonHeadings(state),
        modalData: getModalDataSuper(state),
        isModalActive: getModalDisplayMode(state)
    }
};

export default connect(mapStateToProps, {
    setModalData,
    closeModal
})(ChangesContainer);