import React from 'react';
import contactData from './../data.json';
import ContactList from './../components/contactList'
import Modal from './../utilities/modal';
import AddContact from './../components/addContact';
import './../../src/App.css';
import model from './../model.json';
import validationConfig from './../config/validations.json';

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: contactData,
            showAddContact: false,
            contactDetails: {
                name: '',
                address: '',
                phone: '',
                email: '',
                notes: ''
            },
            areContactDetailsValid: {
                name: true,
                address: true,
                phone: true,
                email: true,
                notes: true
            }
        }
    }

    showAddContact = (event) => {
        this.setState({
            showAddContact: true,
            contactDetails: {
                name: '',
                address: '',
                phone: '',
                email: '',
                notes: ''
            },
            areContactDetailsValid: {
                name: true,
                address: true,
                phone: true,
                email: true,
                notes: true
            },
            isInputValid: false
        });

    }



    closeAddContact = (event) => {
        this.setState({ showAddContact: false });
        event.preventDefault();
    }

    isValid = (control) => {
        let isValidInput = false;
        if (control.getAttribute("iseequired") && !control.value)
            isValidInput = false;
        else
            isValidInput = true;

        if (isValidInput) {
            let regex = control.getAttribute("validationexpression");
            regex = regex.replace(/\\\\/g, '\\');
            if (control.value.match(regex)) {
                isValidInput = true;
            }
            else {
                isValidInput = false;
            }
        }

        this.setState(() => ({
            areContactDetailsValid: {
                ...this.state.areContactDetailsValid,
                [control.name]: isValidInput
            }
        }))
    }

    getValidationExpression = (obj) => {
        let validConfig=validationConfig;
        let expression='.';
        Object.keys(obj).forEach(key => {
            if (key === 'validation') {
                expression= validConfig[obj[key]];
            }
        });
        return expression;
    }

    isModelValid = () => {
        let isInputValid = false;
        let regex = '';
        let validationObject=this.state.areContactDetailsValid;
        let modelObject=model;
        Object.keys(model).forEach(key => {
            regex = this.getValidationExpression(modelObject[key]);
            regex = regex.replace('//', '/');
            if (this.state.contactDetails[key].trim().length>0 && this.state.contactDetails[key].match(regex)) {
                isInputValid = true;
            }
            else {
                isInputValid = false;
            }
            validationObject[key]=isInputValid;
        })

        this.setState(() => ({
            areContactDetailsValid:validationObject
        }))

        return isInputValid;
    }

    addContact = (event) => {
        let data = this.state.contactData;
        if (this.isModelValid()) {
            data.push({
                'name': this.state.contactDetails.name,
                'address': this.state.contactDetails.address,
                'phone': this.state.contactDetails.phone,
                'email': this.state.contactDetails.email,
                'notes': this.state.contactDetails.notes
            });
            this.setState({ contactData: data });

            this.closeAddContact(event);
        }
        event.preventDefault();

    }

    handleInputChange = (event) => {
        const contactDetails = { ...this.state.contactDetails };
        this.setState({
            contactDetails: {
                ...contactDetails,
                [event.target.name]: event.target.value
            }
        });
        this.isValid(event.target);
    }
    render() {
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <button type="button" className="btn btn-info btn-lg add-contact-button" onClick={() => this.showAddContact()}>Add New Contact</button>
                <Modal show={this.state.showAddContact} handleClose={this.closeAddContact}>
                    <AddContact
                        handleCancel={this.closeAddContact}
                        handleOnSubmit={this.addContact}
                        ContactDetails={this.state.contactDetails}
                        handleInputChange={this.handleInputChange}
                        validationResult={this.state.areContactDetailsValid}>
                    </AddContact></Modal>
                <ContactList data={this.state.contactData}></ContactList>
            </div>
        )
    }
}

