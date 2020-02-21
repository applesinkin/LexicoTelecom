import React from "react";
import Table from "../../partials/Table/Table";
import Modal from "../../partials/Modal/Modal";
import Properties from "../../partials/Properties/Properties";

const Changes = (props) => {

    let emptyChangesStatusText = "";
    if (!props.tableDataChanges) {
        emptyChangesStatusText = "You need to download new data first";
    } else if (!props.tableDataChanges.length) {
        emptyChangesStatusText = "No changes found";
    }

    return (
        <div>
            <h2>Changes</h2>

            {
                !emptyChangesStatusText ?
                    <Table data={props.tableDataChanges}
                           headings={props.tableHeadings}
                           setModalData={props.setModalData}/>
                    : <p>{emptyChangesStatusText}</p>
            }

            {props.isModalActive &&
                <Modal title="Properties" closeModal={props.closeModal}>
                    <Properties data={props.modalData}/>
                </Modal>
            }
        </div>
    )
};

export default Changes;