// import React from "react";
import React,{useEffect} from "react";
import AOS from 'aos';
export const Features = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="features" className="text-center" style={{backgroundColor: "#83C331"}}>
      <div className="container" >
        <div className="col-md-10 col-md-offset-1 section-title">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

          <h2 style={{color: "black"}} data-aos="fade-left">Key-Learnings</h2>
        </div>
        </div>
        {/* <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" style={{color: "black"}}>

     hello
</div> */}
{/* <div
       //Here you can use any of the AOS animations
    > hiii</div> */}
        <div className="row">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">



          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3 style={{color: "black"}}> {d.title}</h3>
                  <p style={{color: "black"}}>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        </div>
      </div>
    </div>
  );
};
