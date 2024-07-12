import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import contactImage from "../Images/contact.jpeg"

function Contact() {
  return (
    <Container className="mt-5 animation">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className='d-md-flex mt-5'>
      <div className='contactImageCont d-none d-md-block'>
        <img src={contactImage} alt="" className='contactImage' />
      </div>
    
      <Form className='w-75 mx-5'>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-3'>
          Submit
        </Button>
      </Form>
      </div>
    </Container>
  );
}

export default Contact;