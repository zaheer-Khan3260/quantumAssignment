import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import "./Testimonials.css"
import userImage from "../../Images/user.jpeg"

function Testimonials() {

  return (
    <Container>
      <h1 className='header'>Testimonials</h1>
    <div id="carouselExampleIndicators" className="carousel slide my-5 mainContainer" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className='slideImage-cont'>
        <img src={userImage} className="d-block slideImage" alt="First slide" />
          <p className='slideContaint'>Phasellus vitae suscipit justo. Mauris pharetra
            ante id lacinia. Etiam faucibus mauris id tempor agestes.
            Duis lustus trpis at accumsan tincidunt. phasellus rsus risus, volutpat vel tellus ac,
            tincidunt frongilla massa. Etaim hendrerit dolor eget rutrum
          </p>
        </div>
        <div className="carousel-caption d-none d-md-block">
          <p className='name'><span>PAULA WILSON,</span> Media Analyst</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className='slideImage-cont'>
        <img src={userImage} className="d-block slideImage" alt="First slide" />
          <p className='slideContaint'>Phasellus vitae suscipit justo. Mauris pharetra
            ante id lacinia. Etiam faucibus mauris id tempor agestes.
            Duis lustus trpis at accumsan tincidunt. phasellus rsus risus, volutpat vel tellus ac,
            tincidunt frongilla massa. Etaim hendrerit dolor eget rutrum
          </p>
        </div>
        <div className="carousel-caption d-none d-md-block">
          <p className='name'><span>PAULA WILSON,</span> Media Analyst</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className='slideImage-cont'>
        <img src={userImage} className="d-block slideImage" alt="First slide" />
          <p className='slideContaint'>Phasellus vitae suscipit justo. Mauris pharetra
            ante id lacinia. Etiam faucibus mauris id tempor agestes.
            Duis lustus trpis at accumsan tincidunt. phasellus rsus risus, volutpat vel tellus ac,
            tincidunt frongilla massa. Etaim hendrerit dolor eget rutrum
          </p>
        </div>
        <div className="carousel-caption d-none d-md-block">
          <p className='name'><span>PAULA WILSON,</span> Media Analyst</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </Container>
  );
}

export default Testimonials;