import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import './TrollNavBar.css';

function TrollNavBar() {
    return(
    <Navbar>

        <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Text>
                GET YOUR NEW FAKE IDENTITY WITH JUST A FEW CLICKS!
            </Navbar.Text>

    </Navbar>
    )
}

export default TrollNavBar;