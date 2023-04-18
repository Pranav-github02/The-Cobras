import { Image } from "./image";

import React,{useEffect} from "react";
import AOS from 'aos';

 

export const Gallery = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
      <div data-aos="zoom-out-down">

        <div className="section-title">
          <h2 style={{color: "black"}}>Gallery</h2>
        
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
