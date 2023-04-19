import React, { useEffect } from "react";
import AOS from 'aos';
import { NavLink } from "react-router-dom";
// import '../App.css'

export const Step = (props) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id="steps">
            <div className="container">
                <br /><br />
                <h2 style={{ color: "black" }} className="text-center" >Steps</h2>
                <br /><br />
                <div className="row">
                    <div className="column" >
                        <i className="fa-solid fa-1 fa-bounce"></i>
                        <div className="card text-center" style={{ height: "100px", justifyContent: "center", display: "flex", paddingTop: "34px" }}>
                            {/* <div></div> */}
                            Enter your database name,Warehouse,Schema and everything asked
                        </div>
                    </div>
                    <div className="column">
                        <i className="fa-solid fa-2 fa-bounce"></i>
                        <div className="card text-center" style={{ height: "100px", justifyContent: "center", display: "flex", paddingTop: "34px" }}>
                            {/* <div></div> */}
                            Choose your table name and the operation you want to perform
                        </div>
                    </div>
                    <div className="column">
                        <i className="fa-solid fa-3 fa-bounce"></i>
                        <div className="card text-center" style={{ height: "100px", justifyContent: "center", display: "flex", paddingTop: "34px" }}> Enter the required details like column name and condition(s)(if any)</div>
                    </div>

                </div>

                <br />
                <br />
                <div style={{ justifyContent: "center", textAlign: "center", marginTop: "70px" }} className="text-center">
                    <NavLink to="/info"><button type="button" className="btn" style={{ marginRight: "47PX", height: "50px", width: "150px" }}>Ready to go!</button></NavLink>
                    {/* <button type="button" className="btn" style={{ height: "50px", width: "150px" }}>Still having doubts?</button> */}
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};