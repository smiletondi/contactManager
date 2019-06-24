import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    onChange= (event)=> this.setState({ 
        [event.target.name]: event.target.value
    });
    onSubmit= ()=>{
        console.log(this.state);

    };

    render() {
        const { name, email, phone }= this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">Add contact</div>
                <div className="card-body">
                    <form action="" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                value={name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter email..."
                                value={email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter phone..."
                                value={phone}
                                onChange={this.onChange}
                            />
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;