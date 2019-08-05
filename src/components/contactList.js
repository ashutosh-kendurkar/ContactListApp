import React from 'react';

const getKeys = (props) => {
    return Object.keys(props.data[0]);
}
const ContactHeader = (props) => {
    var keys = getKeys({ ...props });
    return keys.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

const ContactRows = (props) => {
    var keys = getKeys({ ...props });
    var contacts = props.data;
    return contacts.map((row, index) => {
        return <tr key={index}>
            <ContactRow rowIndex={index} data={contacts} keys={keys}></ContactRow>
        </tr>
    })
}

const ContactRow = (props) => {
    return props.keys.map((key, index) => {
        return <td key={index}>{props.data[props.rowIndex][key]}</td>
    })
}

const ContactList = (props) => {
    return (
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <ContactHeader {...props}></ContactHeader>
                </tr>
            </thead>
            <tbody>
                <ContactRows {...props}></ContactRows>
            </tbody>
        </table>
    );
}

export default ContactList;