import React from "react";
import s from "./Button.module.scss";

const Button = ({label = "button", onClick, ...props}) => {
    return (
        <button className={s.btn} type={props.type} onClick={onClick}>{label}</button>
    )
};

export default Button;