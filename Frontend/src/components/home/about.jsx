// import React from "react";
import React,{useEffect} from "react";
import AOS from 'aos';
import image from "./img/about.jpg"
export const About = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="about">
      <div className="container">
      <div data-aos="zoom-in" data-aos-duration="2000">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={image} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{color: "black"}}>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
                
               
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
