import React from "react";
import s from "./Button.module.scss";

const Button = ({
    label = "text",
    onClick,
    ...props
}) => {
    return (
        <button
            className={s.btn}
            onClick={() => {
                onClick && onClick()
            }}
            {...props}
        >
            {label}
        </button>
    )
};

export default Button;