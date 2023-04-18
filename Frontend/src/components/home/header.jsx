import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="intro-text" style={{ fontSize: "43px", width: "600px" }}>
            <h2>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h2>
            <p style={{ fontWeight: "503" }}>{props.data ? props.data.paragraph : "Loading"}</p>
            <a
              href="#steps"
              className="btn btn-custom btn-lg page-scroll"
            >
              Learn More
            </a>{" "}
          </div>

        </div>
      </div>
    </header>
  );
};