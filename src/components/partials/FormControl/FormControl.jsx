import React from "react";

export const FormInput = ({input, meta: {touched, error}, ...props}) => {
    return (
        <div>
            <input {...input} {...props} />
            {touched && error && <span className="error-message">{error}</span>}
        </div>
    )
};