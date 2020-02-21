import React from "react";
import SettingsForm from "./SettingsForm/SettingsForm";

const Settings = props => {

    const initialValues = {
        file_url: props.fileUrl,
    };

    return (
        <div>
            <h2>Settings</h2>
            <SettingsForm initialValues={initialValues} onSubmit={props.submitSettings}/>
        </div>
    )
};

export default Settings;