import React, { Component } from 'react'

import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '111-111-1111'
            },
            {
                id: 2,
                name: 'Mary Jane',
                email: 'maryJane@gmail.com',
                phone: '112-111-1111'
            },
            {
                id: 3,
                name: 'Henry Johnson',
                email: 'henry@gmail.com',
                phone: '112-111-1111'
            }
        ]
    };

    deleteContact = (id) => {
        let { contacts }= this.state;
        contacts= contacts.filter(contact=> contact.id!== id);

        this.setState({
            contacts: contacts
        });
    };

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => {
                    return <Contact 
                    key={contact.id} 
                    contact={contact}
                    deleteClickHandler= {this.deleteContact.bind(this, contact.id)} />
                })}
            </React.Fragment>
        )
    }
}


export default Contacts;