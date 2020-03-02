import React from "react";
import RolesFilter from "./RolesFilter/RolesFilter";
import TextFilter from "./TextFilter/TextFilter";
import s from "./Filters.module.scss";

const Filters = (props) => {

    let rolesFilterValue = props.filtersValues.filter_by_roles;
    let textFilterValue = props.filtersValues.filter_by_text;

    return (
        <nav className={s.filters} action="">
            <RolesFilter currentValue={rolesFilterValue} setFilter={props.setFilter} roles={props.roles}/>
            <TextFilter currentValue={textFilterValue} setFilter={props.setFilter}/>
        </nav>
    )
};

export default Filters;