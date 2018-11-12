import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, toggleUser } from '../reduxboilerplate/actions/Actions'
import UserData from './component/UserData';

class BusinessProfile extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    onClick = (index) => {
        this.props.toggleUser(index)
    }

    componentWillReceiveProps(nextProps) {
        console.log('receive prop')
    }

    render() {
        const { users } = this.props;
        console.log(users)
        return (
            <React.Fragment>
                {
                    users.map((data, index) => (
                        <UserData key={index} data={data} onClick={this.onClick.bind(this, index)} />
                    ))
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = {
    getUsers, toggleUser
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessProfile);