import React, { useState, useEffect } from "react";
// import { Navbar } from "../navbar/Navbar";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./Services";
// import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Contact } from "./contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Step } from "./Step"
import "./home.css";
import "./css/bootstrap.css"
import "./fonts/font-awesome/css/font-awesome.css"
import "./css/style.css"
import "./css/nivo-lightbox/nivo-lightbox.css"
import "./css/nivo-lightbox/default.css"
import { Navbar } from "../navbar/Navbar";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navbar />
      <Header data={landingPageData.Header} />
      <Step />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;
