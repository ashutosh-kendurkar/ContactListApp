import React from 'react';
import { withActions } from './hoc/withActions';

const textbox = ({ name, value, handleInputChange, classname, placeholder, isRequired, isValid, validationMessage,validationExpression }) => {

    return (
        <React.Fragment>
            <input type="text"
                value={value}
                onChange={handleInputChange}
                className={classname} name={name}
                id={name} placeholder={placeholder}
                validationexpression={validationExpression}
                iseequired={isRequired.toString()}
            />            
        </React.Fragment>
    )
}

textbox.defaultProps={
    name:'test',
    value:'', 
    handleInputChange:() => {}, 
    classname:'', 
    placeholder:'props not initialised', 
    isRequired:false, 
    isValid:true, 
    validationMessage:'', 
    validationExpression:'' 
}

export default withActions(textbox);