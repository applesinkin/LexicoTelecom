import React from "react";
import {connect} from "react-redux";
import Settings from "./Settings";
import {getFileUrl} from "../../../redux/common-selectors";
import {setFileUrl} from "../../../redux/common-reducer";

class SettingsContainer extends React.Component {

    submitSettings = (obj) => {
        if (obj.file_url) {
            this.props.setFileUrl(obj.file_url);
        }
    };

    render() {
        return <Settings fileUrl={this.props.fileUrl}
                         submitSettings={this.submitSettings}/>
    }
}

const mapStateToProps = (state) => {
    return {
        fileUrl: getFileUrl(state)
    }
};

export default connect(mapStateToProps, {
    setFileUrl
})(SettingsContainer);