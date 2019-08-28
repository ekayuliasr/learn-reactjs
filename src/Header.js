import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
  	return(
		<div className="header">
			<Navbar bg="light" expand="lg">
			  <Navbar.Brand href="#home">React</Navbar.Brand>
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link><Link to="/">Home</Link></Nav.Link>
			      <Nav.Link><Link to="/card">Card</Link></Nav.Link>
			      <Nav.Link><Link to="/form">Form</Link></Nav.Link>
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


