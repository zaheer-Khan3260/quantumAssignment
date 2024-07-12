import React from 'react';
import featuresImage1 from "../../Images/featuresImage1.jpeg";
import "./Features.css"

function Features() {
 
  return (
    <div className="container">
      <div className='header-cont text-center my-4'>
        <h1>Features</h1>
      </div>

      <div className="feature-cont mb-5">
        <div className="featureInnerCont">
          <div className="featurImage-cont">
            <img src={featuresImage1} className="featureImage" alt="Feature" />
          </div>
          <div className="featureContaint-cont">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-cont my-5">
        <div className="featureInnerCont reverse">
          <div className="featurImage-cont">
            <img src={featuresImage1} className="featureImage" alt="Feature" />
          </div>
          <div className="featureContaint-cont">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-cont my-5">
        <div className="featureInnerCont">
          <div className="featurImage-cont">
            <img src={featuresImage1} className="featureImage" alt="Feature" />
          </div>
          <div className="featureContaint-cont">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;