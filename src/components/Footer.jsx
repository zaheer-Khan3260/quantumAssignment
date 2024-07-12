import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer text-light">
      <Container>
        <Row className="py-4">
          <Col md={4} className=' text-center'>
            <h5>Contact Us</h5>
            <h3>Email</h3> 
            <p>contact@jilliontechnologies.com</p>
            <h3>Phone</h3> 
            <p>123456789</p>
            <h3>Address</h3> 
            <p>C-260, Sector-63, Noida, Up-201301</p>
          </Col>
          <Col md={2} className='text-center'>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
            </ul>
          </Col>
          <Col md={3} className='text-center'>
            <h5>Service</h5>
            <ul className="list-unstyled">
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>E-commerce Development</li>
            </ul>
          </Col>
          <Col md={3} className='text-center'>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>Terms & Policy</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;