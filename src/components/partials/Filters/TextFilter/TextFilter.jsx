import React, {useState} from "react";
import s from "../Filters.module.scss";

const TextFilter = (props) => {

    const [value, setValue] = useState(props.currentValue);
    const [timer, setTimer] = useState(0);

    if (value !== props.currentValue && !timer) {
        setValue(props.currentValue);
    }

    const handleSetValue = (e) => {
        if (timer) {
            clearTimeout(timer);
        }

        let value = e.target.value;
        setValue(value);

        setTimer( setTimeout( () => {
            props.getFilteredResults('filter_by_text', value);
            setTimer(null);
        }, 500 ) );
    };

    return (
        <div className={`${s.filter} ${s.filter_toEnd}`}>
            <label className={s.filter__label}>Filter by text</label>
            <input className={s.filter__input} onChange={handleSetValue} name="filter_by_text" type="text" value={value} />
        </div>
    )
};

export default TextFilter;