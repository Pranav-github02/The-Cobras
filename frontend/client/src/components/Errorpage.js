import React from 'react';
import { NavLink } from 'react-router-dom';
import o from '../img/o.jpg'
const Errorpage=()=>{
    return(
        <>
        <>
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    
                    <img src={o} alt="404" style={{height:'650px',width:'100%',border:'none'}}  />
                    {/* <p> */}

                    {/* </p> */}
                    <NavLink to="/">Back to homepage</NavLink>

                </div>

            </div>

        </div>
        </>
        </>
    )
}
export default Errorpage