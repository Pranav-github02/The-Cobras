
import React,{useEffect} from "react";
import AOS from 'aos';

 
export const Testimonials = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="testimonials">
      <div className="container">
     

        <div className="section-title text-center">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

          <h2>OUR MENTORS</h2>
        </div>
        </div>
        <div className="row">
        
          {props.data
            ? props.data.map((d, i) => (
              <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p style={{color: "White"}}>"{d.text}"</p>
                      <div className="testimonial-meta" style={{color: "White"}}> - {d.name} </div>
                    </div>
                  </div>
                </div>
                </div>
              ))
            : "loading"}
       
      </div>
      </div>
    </div>
  );
};
