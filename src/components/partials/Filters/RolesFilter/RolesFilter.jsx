import React, {useState} from "react";
import s from '../Filters.module.scss';

const RolesFilter = ({roles, ...props}) => {

    const [value, setValue] = useState(props.currentValue);
    if (value !== props.currentValue) {
        setValue(props.currentValue);
    }

    const handleSetValue = (e) => {
        let value = e.target.value;
        setValue(value);
        props.setFilter('filter_by_roles', value);
    };

    let rolesOptions = roles.map(role => {
        return <option key={role} value={role}>{role}</option>
    });

    return (
        <div className={s.filter}>
            <label className={s.filter__label}>Filter by roles</label>
            <select className={s.filter__input} value={value} onChange={handleSetValue}>
                <option value="">None</option>
                {rolesOptions}
            </select>
        </div>
    )
};

export default RolesFilter;