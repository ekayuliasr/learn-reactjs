import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';

class Header extends Component {
  render(){
  	return(
		<div className="header">
			<Navbar bg="light" expand="lg">
			  <Navbar.Brand href="#home">React</Navbar.Brand>
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="#home">Home</Nav.Link>
			      <Nav.Link href="#link">Link</Nav.Link>
			      <Nav.Link href="#about">About</Nav.Link>
			    </Nav>
			    <Form inline>
			      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
			      <Button variant="outline-success">Search</Button>
			    </Form>
			  </Navbar.Collapse>
			</Navbar>
		</div>
	);
  }
}


export default Header;


