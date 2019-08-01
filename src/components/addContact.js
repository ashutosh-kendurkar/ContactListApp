import React from 'react';
import Textbox from './common/textbox';
import TextArea from './common/textArea';
import Validations from './../config/validations.json';

const AddContact = ({ handleOnSubmit, handleCancel, ContactDetails, handleInputChange, validationResult }) => {
    return (
        <form className="form-horizontal">
            <div className="form-group">
                <Textbox isRequired={true}
                    validationExpression={Validations.alphabetsWithSpace}
                    classname="form-control"
                    value={ContactDetails.name}
                    name="name"
                    displayName="Name"
                    placeholder="Name"
                    handleInputChange={handleInputChange}
                    isValid={validationResult}
                    validationMessage="Please enter your Name." />
            </div>

            <div className="form-group">
                <Textbox classname="form-control"
                    name="address"
                    isRequired={false}
                    validationExpression={Validations.alphaNumericWithSpaceAndHyphen}
                    displayName="Address"
                    placeholder="Address"
                    value={ContactDetails.address}
                    handleInputChange={handleInputChange}
                    isValid={validationResult}
                    validationMessage="Address can contain characters and numbers only." />
            </div>


            <div className="form-group">
                <Textbox classname="form-control"
                    isRequired={false}
                    validationExpression={Validations.indiaPhoneNumber}
                    name="phone"
                    displayName="Phone"
                    placeholder="Phone (india Fixed or Mobile)"
                    value={ContactDetails.phone}
                    handleInputChange={handleInputChange}
                    isValid={validationResult}
                    validationMessage="Please enter valid India Phone Number" />
            </div>
            <div className="form-group">
                <Textbox classname="form-control"
                    isRequired={true}
                    validationExpression={Validations.email}
                    name="email"
                    displayName="Email"
                    placeholder="Email address"
                    value={ContactDetails.email}
                    handleInputChange={handleInputChange}
                    isValid={validationResult}
                    validationMessage="Please enter valid email address" />

            </div>

            <div className="form-group">
                <TextArea classname="form-control"
                    isRequired={false}
                    validationExpression={Validations.allowAny}
                    name="notes"
                    displayName="Notes"
                    placeholder="Type Notes"
                    value={ContactDetails.notes}
                    handleInputChange={handleInputChange}
                    isValid={validationResult}
                    validationMessage="Please enter valid notes"
                    rows={4}
                    columns={30} />
            </div>

            <div className="button-modal">
            <button className="btn btn-secondary" onClick={(e) => { handleCancel(e) }}>Cancel</button>&nbsp;
            <button className="btn btn-primary" onClick={(e) => { handleOnSubmit(e) }}>Add Contact</button>
            </div>

        </form>


    );
}

export default AddContact;