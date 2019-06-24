import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Consumer } from '../../context';


class Contact extends Component {
    state = {
        displayContactInfo: false
    };

    onShowClick = () => {
        this.setState({
            displayContactInfo: !this.state.displayContactInfo
        });
        console.log(this.state);
    };
    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    };
    render() {
        const { id, name, email, phone } = this.props.contact;
        const { displayContactInfo } = this.state;
        return (
            <Consumer>
                {({ dispatch }) => {
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name + " "}
                                { this.state.displayContactInfo? (<i className="fas fa-sort-up" onClick={this.onShowClick}
                                    style={{ cursor: "pointer" }} />) : (<i className="fas fa-sort-down" onClick={this.onShowClick}
                                    style={{ cursor: "pointer" }} />)}
                                <i className="fas fa-times" onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                    style={{ cursor: "pointer", float: "right", color: "orange" }} />
                            </h4>
                            {displayContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null}

                        </div>
                    )
                }}
            </Consumer>
        )
    }
};

Contact.defaultProps = {
    name: 'filana',
    email: 'filana@fil.ne',
    phone: '+212 09 09 09 09'
};

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;