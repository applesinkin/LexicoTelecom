import React from "react";
import Table from "../../partials/Table/Table";
import Filters from "../../partials/Filters/Filters";
import Modal from "../../partials/Modal/Modal";
import Properties from "../../partials/Properties/Properties";
import Button from "../../partials/Button/Button";

const Data = ({
    roles,
    tableData,
    handleSetTableData,
    tableHeadings,
    fileUrl,
    setFilter,

    filtersValues,
    setModalData,
    modalData,
    closeModal,
    isModalActive,
}) => {

    let handleGetData = () => {
        handleSetTableData(fileUrl)
    };

    return (
        <div>
            <h2>Data</h2>

            <Filters
                setFilter={setFilter}
                filtersValues={filtersValues}
                roles={roles}
            />

            <Table
                data={tableData}
                setModalData={setModalData}
                headings={tableHeadings}
            />

            <div>
                <Button
                    onClick={handleGetData}
                    label={tableData
                        ? "Update CSV"
                        : "Download CSV"
                    }
                />
            </div>

            {isModalActive &&
                <Modal
                    title="Properties"
                    closeModal={closeModal}
                >
                    <Properties
                        data={modalData}
                    />
                </Modal>
            }
        </div>
    )
};

export default Data;