import React, { Component } from 'react'

import { Consumer } from '../../context';
import Contact from './Contact';

class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {state => {
                    const { contacts } = state;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger">Contact</span> list
                            </h1>
                            {contacts.map(contact => {
                                return <Contact
                                    key={contact.id}
                                    contact={contact}/>
                            })}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}


export default Contacts;