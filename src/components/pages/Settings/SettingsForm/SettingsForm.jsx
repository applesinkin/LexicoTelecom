import React from "react";
import {Field, reduxForm} from "redux-form";
import {required, url} from "../../../../utils/validation";
import {FormInput} from "../../../partials/FormControl/FormControl";
import s from "./SettingsForm.module.scss";
import Button from "../../../partials/Button/Button";

const SettingsForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="file_url"
                   component={FormInput}
                   type="text"
                   className={s.input}
                   validate={[url, required]}/>
            <Button label="Submit Settings" type="submit"/>
        </form>
    )
};

export default reduxForm({
    form: "settings"
})(SettingsForm);