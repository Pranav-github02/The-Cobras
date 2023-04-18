
import React,{useEffect} from "react";
import AOS from 'aos';

  
export const Team = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="team" className="text-center">
      <div className="container">
      <div data-aos="fade-down-left"    data-aos-duration="2000">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 style={{color: "black"}}>Meet the Team</h2>
          
        </div>
        <div id="row" style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                  
                    </div>
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
