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
                        <a href="/">Our Awesome Store</a>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle /> */}
                {/* </Navbar.Header> */}
                <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">Shop</NavItem>
                    <NavItem eventKey={3} href="#">
                        <Glyphicon glyph="shopping-cart" /> {'Cart'} </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        
    }
}

// export default Header;