import React from 'react';
import Textbox from './common/textbox';

const AddContact = ({ handleOnSubmit, handleCancel, ContactDetails, handleInputChange, validationResult }) => {
    console.log('ContactDetails.email.length :', ContactDetails.email.length);
    return (
        <form role="form">
            <div className="row"><h2>Add Contact</h2></div>
            <div className="row">
                <div className="form-group col-md-6">
                    {/* <label className="sr-only" htmlFor="#">Name *</label> */}
                    {/* <input type="text" className="form-control"  value={ContactDetails.name} name="name" placeholder="Name" handleInputChange={handleInputChange} /> */}
                    <Textbox classname="form-control" value={ContactDetails.name} name="name" placeholder="Name" handleInputChange={handleInputChange} />
                    {(validationResult.name) ? null : (
                        <small id="nameError" class="text-danger">
                            Name is a required field!
            </small>)}
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <Textbox classname="form-control" name="address" placeholder="Address" value={ContactDetails.address} handleInputChange={handleInputChange} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <Textbox classname="form-control" name="phone" placeholder="Phone" value={ContactDetails.phone} handleInputChange={handleInputChange} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <Textbox classname="form-control" name="email" placeholder="Email address" value={ContactDetails.email} handleInputChange={handleInputChange} />
                    <p>{(ContactDetails.email.length > 0 ? (validationResult.email ? null : <small id="emailError" class="text-danger">
                            Please enter valid email address!
            </small>) : null)}</p>
                </div>

            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <Textbox classname="form-control" name="notes" placeholder="Type Notes" value={ContactDetails.notes} handleInputChange={handleInputChange} />
                </div>
            </div>
            
            <div className="button-modal">
                <button className="btn btn-secondary" onClick={(e) => { handleCancel(e) }}>Cancel</button>&nbsp;
            <button className="btn btn-primary" onClick={(e) => { handleOnSubmit(e) }}>Add Contact</button>
            </div>

        </form>


    );
}

export default AddContact;