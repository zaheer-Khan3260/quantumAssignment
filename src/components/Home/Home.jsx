import React from 'react';
import { Container, Button } from 'react-bootstrap';
import workingGirlImage from "../../Images/workinggirl.jpeg"
import "./Home.css"
import Contact from "../Contact.jsx"
import Features from '../Features/Features';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Testimonials from '../Testimonials/Testimonials';
import Products from '../Products';

function Home() {
  return (
    <>
    <Container className="mt-5 md-mt-2">
      <div className='main-container d-md-flex d-block'>
        <div className='containt-Container'>
          <h1 className='mainHeading'>WE MAKE YOUR IDEA'S <p className='mainHeader'>INTO REALITY</p></h1>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div>
          <Button variant="primary" className="button">Get Started</Button>
          <Button variant="outline-primary">Contact Us</Button>
          </div>
        </div>
        <div className='img-cont mt-5 md-mt-0'>
          <img src={workingGirlImage} alt="" className='mainImage' />
        </div>
      </div>

       <Features/>
       <Products/>
       <Testimonials/>
       </Container>
       <Contact/>
    
    </>
  );
}

export default Home;