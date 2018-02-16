import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Nav, NavItem } from 'react-bootstrap';

export default class Footer extends React.Component
{
    render(){
        return(
            <footer>
                <Grid>
                <Nav justified>
                <NavItem
                    eventKey={1}>
                    Privacy policy
                </NavItem>
                <NavItem
                    eventKey={2}
                    title="Item">
                    Terms & Conditions
                </NavItem>
                <NavItem
                    eventKey={3}>
                    Some other professional link
                </NavItem>
                </Nav>
                <div className="text-center small copyright">
                © IqbalDwiPrawira 2018
                </div>
            </Grid>
            </footer>
        );
        
    }
}