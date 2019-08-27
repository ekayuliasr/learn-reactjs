import React, { Component } from 'react';
import logo from './logo192.png';
import { Form, Button } from 'react-bootstrap';

class Content extends Component {
	render(){
		return(
			<div className="content col-lg-4">
				<h1> Form </h1>
				<Form>
				  <Form.Group controlId="formBasicNama">
				    <Form.Label>Nama</Form.Label>
				    <Form.Control type="text" />
				  </Form.Group>

				  <Form.Group controlId="formBasicTempat">
				    <Form.Label>Tempat Lahir</Form.Label>
				    <Form.Control type="text" />
				  </Form.Group>
				  <Form.Group controlId="formBasicTanggal">
				    <Form.Label>Tanggal Lahir</Form.Label>
				    <Form.Control type="date" />
				  </Form.Group>
				  <Form.Group controlId="exampleForm.ControlTextarea1">
				    <Form.Label>Alamat</Form.Label>
				    <Form.Control as="textarea" rows="2" />
				  </Form.Group>
				  <Button variant="primary" type="submit">
				    Submit
				  </Button>
				</Form>
			</div>
		);
	}
}

export default Content;