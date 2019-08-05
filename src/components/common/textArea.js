import React from 'react';
import { withActions } from './hoc/withActions';

const textArea = ({ name, value, handleInputChange, classname, placeholder, isRequired, isValid, validationMessage, rows, columns,validationExpression }) => {

    return (
        <React.Fragment>
            <textarea
                value={value}
                onChange={handleInputChange}
                className={classname} name={name}
                id={name} placeholder={placeholder}
                rows={rows}
                columns={columns}
                validationexpression={validationExpression}
                isrequired={isRequired.toString()}
            />
        </React.Fragment>
    )
}

textArea.defaultProps={
    name:'test',
    value:'', 
    handleInputChange:() => {}, 
    classname:'', 
    placeholder:'props not initialised', 
    isRequired:false, 
    isValid:true, 
    validationMessage:'', 
    rows:10, 
    columns:10,
    validationExpression:'' 
}

export default withActions(textArea);