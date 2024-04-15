import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Dropdown } from "semantic-ui-react";
import DropdownCom from './dropdown'


// import "./extends.css"

export { Home };

function Home() {
    const auth = useSelector(x => x.auth.value);
    
     
    return (
        <div>
            <div>
                <span >X</span>
                <h1>Hi {auth?.firstName}!</h1>
                <p>You're logged in with React 18 + Redux & JWT!!</p>
                <p><Link to="/users">Manage Users</Link></p>
            </div>

            <DropdownCom/>

            <h1>NAVIGATIONS</h1>
            <h1>LINKS</h1>
            <h1>BUTTONS</h1>
            <h1>FORM</h1>
            <h1>ANCHOR TABS</h1>
            <h1>MOUSE HOVER</h1>
            <h1>CLICK</h1>
            <h1>MAIL-CHIMP SUBSCRIPTION</h1>
            <h1>SEARCH</h1>

        </div>
    );
}
