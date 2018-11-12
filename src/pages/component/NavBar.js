import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <NavLink to="/userprofile">UserProfile</NavLink>
                    <NavLink to="/businessprofile">BusinessProfile</NavLink>
                    <NavLink to="/subscription">Subscription</NavLink>
                    <NavLink to="/security">Security</NavLink>
                </li>
            </ul>
        </React.Fragment>
    )
}
export default NavBar;