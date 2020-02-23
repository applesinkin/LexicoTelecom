import React, {useState} from "react";
import s from "./Properties.module.scss";

let getClass = (obj) => {
    return {}.toString.call(obj).slice(8, -1);
}

const Property = ({name = null, data = null}) => {
    let dataType = getClass(data);

    let [displayMode, setDisplayMode] = useState(true);
    let valueClass = displayMode ? 'opened' : 'closed';
    let toggleClass = () => {
        setDisplayMode(!displayMode);
    }

    if (data === null
        || typeof data === "string"
        || typeof data === "number"
        || typeof data === "boolean") {

        return <>
            <dt className={s[valueClass]} onClick={toggleClass}>{name} <small>({dataType})</small></dt>
            <dd className={s[valueClass]}>{'' + data}</dd>
        </>

    }  else if (typeof data === 'object') {

        let keys = Object.keys(data);
        let keysMarkup = [];
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            keysMarkup.push(<dl className={s.list} key={key}><Property name={key} data={data[key]} /></dl>);
        }

        return <>
            <dt className={s[valueClass]} onClick={toggleClass}>{name} <small>({dataType})</small></dt>
            <dd className={s[valueClass]}>{keysMarkup}</dd>
        </>
    }

    return "";
};

const Properties = ({data}) => {

    return (
        <div>
            <dl className={s.list}>
                <Property name="json" data={data} />
            </dl>
        </div>
    )
};

export default Properties;