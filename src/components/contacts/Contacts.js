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