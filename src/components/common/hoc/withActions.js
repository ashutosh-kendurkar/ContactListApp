import React from 'react';

export const withActions = NestedControl => {
    class childControl extends React.Component {
        render() {
            const labelClass = this.props.isRequired ? "required" : ""
            return (
                <React.Fragment>
                    <div className={labelClass}><label className="control-label col-sm-2">{this.props.displayName}</label></div>
                    <div className="col-sm-10">
                        <NestedControl {...this.props}></NestedControl>
                    </div>
                    {this.props.isValid[this.props.name] ? null : (<p>
                        <small id="nameError" className="text-danger">{this.props.validationMessage}</small>
                    </p>)}
                </React.Fragment>
            );
        }
    }
    return childControl;
}