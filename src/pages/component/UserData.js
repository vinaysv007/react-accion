import React from 'react';

const UserData = ({data, onClick}) => {
    return (
        <React.Fragment>
            <ul onClick = {onClick}>
                <li>{data.fname}</li>
                {data.toggle && <li>{data.lname}</li>}
                {data.toggle && <li>{data.email}</li>}
            </ul>
        </React.Fragment>
    )
}

export default UserData
