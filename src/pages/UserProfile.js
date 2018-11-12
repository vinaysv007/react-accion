import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUsers } from '../reduxboilerplate/actions/Actions';

class UserProfile extends Component {

    state = {
        fname: null,
        lname: null,
        email: null
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addUsers(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={e => this.onSubmit(e)}>
                    <label>First Name</label>
                    <input type="text" name="fname" onChange={this.onChange.bind(this)} />
                    <br />
                    <label>Last Name</label>
                    <input type="text" name="lname" onChange={this.onChange.bind(this)} />
                    <br />
                    <label>Email</label>
                    <input type="text" name="email" onChange={this.onChange.bind(this)} />
                    <br />
                    <input type="submit" name="Submit" />
                </form>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    addUsers
}

export default connect(null, mapDispatchToProps)(UserProfile);