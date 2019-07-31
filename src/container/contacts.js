import React from 'react';
import contactData from './../data.json';
import ContactList from './../components/contactList'
import Modal from './../utilities/modal';
import AddContact from './../components/addContact';
import './../../src/App.css';
import { validate } from '@babel/types';

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
                name: false,
                email: false
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
                name: false,
                email: false
            }
        });

    }



    closeAddContact = (event) => {
        this.setState({ showAddContact: false });
        event.preventDefault();
    }

    isValid = () => {
        let nameIsValid=true;
        let emailIsValid=false;

        if (!this.state.contactDetails.name) {
            nameIsValid=false;
        }
        
        if (this.state.contactDetails.email) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(this.state.contactDetails.email.match(mailformat))
            {
                emailIsValid=true;
            }
        }
        this.setState({
            areContactDetailsValid: {
                name: nameIsValid,
                email: emailIsValid
            }
        })

        if(!nameIsValid || !emailIsValid)return false;

        return true;
    }

    addContact = (event) => {
        let data = this.state.contactData;
        if (this.isValid()) {
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
        this.isValid();
    }
    render() {
        console.log('this.state.contactData :', this.state.contactData);
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <button type="button" className="add-contact-button" onClick={() => this.showAddContact()}>Add New Contact</button>
                <Modal show={this.state.showAddContact} >
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

