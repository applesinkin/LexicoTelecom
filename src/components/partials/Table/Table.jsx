import React from "react";
import s from "./Table.module.scss";

const Table = ({data, headings, setModalData}) => {

    let headingsMarkup = [];
    if (headings) {
        headingsMarkup = headings.map(name => {
            return <th key={name}>{name}</th>
        });
    }

    let rowsMarkup = [];
    if (data && headings) {
        rowsMarkup = data.map(data => {
            let tdElements = headings.map(name => {
                if (name === "parameters") {
                    let handleOpenModal = () => {
                        setModalData(data[name]);
                    };
                    return <td key={name}>
                        <div className={s.parameters} onClick={handleOpenModal}>{JSON.stringify(data[name])}</div>
                    </td>;
                }
                return <td key={name}>{data[name]}</td>;
            });
            return (
                <tr key={data.request}>{tdElements}</tr>
            )
        });
    }

    return (
        <div className={s.table__wrapper}>
            <table className={s.table}>
                <thead>
                <tr>{headingsMarkup}</tr>
                </thead>
                <tbody>{rowsMarkup}</tbody>
            </table>
        </div>
    )
};

export default Table;