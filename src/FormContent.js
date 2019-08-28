import React from 'react';
import { Breadcrumb, Form, Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';

const FormContent = ({ match }) => {
    return (
        <React.Fragment>
		  	<Breadcrumb>
			  <Breadcrumb.Item><Link to="/form">Form 1</Link></Breadcrumb.Item>
			  <Breadcrumb.Item><Link to={`${match.url}/form2`}>Form 2</Link></Breadcrumb.Item>
			</Breadcrumb>
			<div className="content col-lg-4 mt-4">
				<h1> Form 1 </h1>
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
			<div className="col-md-8">
	            <Route path={`${match.path}/form2`} render={() => { 
	            	return <div className="content col-lg-6 mt-4">
					<h1> Form 2 </h1>
					<Form>
					  <Form.Group controlId="formBasicJenis">
					    <Form.Label>Jenis Pekerjaan</Form.Label>
					    <Form.Control type="text" />
					  </Form.Group>
					  <Form.Group controlId="exampleForm.ControlTextarea1">
					    <Form.Label>Alamat Kantor</Form.Label>
					    <Form.Control as="textarea" rows="2" />
					  </Form.Group>
					  <Button variant="primary" type="submit">
					    Submit
					  </Button>
					</Form>
				</div> }}/>
	        </div>
		</React.Fragment>

            
    );
}

export default FormContent;