import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export default class Headers extends React.Component
{
    render(){
        return(
            <Navbar>
                {/* <Navbar.Header> */}
                    <Navbar.Brand>
                        <a href="/">Hamboo</a>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle /> */}
                {/* </Navbar.Header> */}
                <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">Profile</NavItem>
                    <NavItem eventKey={3} href="#">
                        <Glyphicon glyph="shopping-cart" /> {'Book'} </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        
    }
}

// export default Header;