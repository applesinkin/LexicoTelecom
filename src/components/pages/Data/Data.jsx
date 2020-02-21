import React from "react";
import Table from "../../partials/Table/Table";
import Filters from "../../partials/Filters/Filters";
import Modal from "../../partials/Modal/Modal";
import Properties from "../../partials/Properties/Properties";
import Button from "../../partials/Button/Button";

const Data = ({setTableData, ...props}) => {

    const dataUrl = props.fileUrl;

    let handleGetData = () => {
        props.handleSetTableData(dataUrl)
    };

    return (
        <div>
            <h2>Data</h2>

            <Filters getFilteredResults={props.getFilteredResults}
                     filtersValues={props.filtersValues}
                     roles={props.roles}/>

            <Table data={props.tableData}
                   setModalData={props.setModalData}
                   headings={props.tableHeadings}/>

            <div>
                <Button onClick={handleGetData} label={props.tableData ? "Update CSV" : "Download CSV"}/>
            </div>

            {props.isModalActive &&
                <Modal title="Properties" closeModal={props.closeModal}>
                    <Properties data={props.modalData}/>
                </Modal>
            }
        </div>
    )
};

export default Data;