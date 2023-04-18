import React,{useEffect} from "react";
import AOS from 'aos';

export const Services = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
        <div data-aos="zoom-in">
          <h2 style={{color: "black"}}>Our Services</h2>
         
        </div>
        </div>
       
        <div className="row">
        <div data-aos="flip-left" data-aos-duration="2000">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3 style={{color: "black"}}>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        </div>
   
 
   
      </div>
    </div>
  );
};