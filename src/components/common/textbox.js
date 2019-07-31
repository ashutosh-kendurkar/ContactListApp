import React from 'react';

const textbox = ({ name, value, handleInputChange, classname, placeholder }) => {

    return (
        <React.Fragment>
            <input type="text"
                value={value}
                onChange={handleInputChange}
                className={classname} name={name}
                id={name} placeholder={placeholder}
            />
        </React.Fragment>
    )
}

export default textbox;