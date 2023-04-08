import React,{useEffect} from "react";
import AOS from 'aos';
import '../App.css'

export const Step = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

   
       
     <>

       <br /><br />

          <h2 style={{color: "black"}} className="text-center" >Steps</h2>
       <br /><br />
        
<div class="row">
  <div class="column" >
    <div class="card text-center" style={{height:"100px",justifyContent:"center",display:"flex",paddingTop:"34px"}}>
    {/* <div></div> */}
    
    
    Enter your database name,Warehouse,Schema and everything asked
    
    </div>
  </div>
  


  <div class="column">
  <div class="card text-center" style={{height:"100px",justifyContent:"center",display:"flex",paddingTop:"34px"}}>
    {/* <div></div> */}
    
    
    Choose your table name and the operation you want to perform
    
    </div>
    
  </div>
  <div class="column">
  <div class="card text-center" style={{height:"100px",justifyContent:"center",display:"flex",paddingTop:"34px"}}> Enter the required details like column name and condition if any</div>
  </div>
 
</div>

<br />
<br />
{/* <div class="text-center">
  <button type="button" class="btn btn-primary">Primary</button>
</div> */}
<div style={{justifyContent:"center",textAlign:"center",marginTop:"70px"}} className="text-center">
<button type="button" class="btn btn-primary" style={{marginRight: "47PX",height:"50px",width:"150px"}}>Ready to go!</button>
<button type="button" class="btn btn-primary"  style={{height:"50px",width:"150px"}}>Still having doubts?</button>
</div>
<br />
<br />
<br />
<br />
<br />
     </>
   
 
   
     
  );
};
