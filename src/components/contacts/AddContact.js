import React, { Component } from 'react'
import uuid from 'uuid';

import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });
    onSubmit = (dispatch, event) => {
        event.preventDefault();
        const { name, email, phone } = this.state;

        // Check for errors
        if (name === '') {
            this.setState({
                errors: {
                    name: 'Name is required'
                }
            });
            return;
        }
        if (email === '') {
            this.setState({
                errors: {
                    email: 'Email is required'
                }
            });
            return;
        }
        if (phone === '') {
            this.setState({
                errors: {
                    phone: 'Phone is required'
                }
            });
            return;
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact
        })

        // Clear state
        this.setState({
            name: '',
            email: '',
            phone: ''
        });

        // Redirection
        this.props.history.push('/');
    };

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {state => {
                    const { dispatch } = state;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add contact</div>
                            <div className="card-body">
                                <form action="" onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label='Name'
                                        name="name"
                                        placeholder="Enter Name..."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label='Email'
                                        name="email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label='Phone'
                                        name="phone"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />

                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default AddContact;