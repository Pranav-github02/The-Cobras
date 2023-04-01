import React, { useEffect,useState } from 'react'
// import { useNavigate } from "react-router-dom"
import { Link, useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
import img from '../img/newimg2.png'
// import Kar from '';
// import hero from "../images/hero.webp"; 
const About = () => {
  const navigate = useNavigate();
  const [useData,serUserData]=useState({});

const deleteProduct=async(event,email)=>{
  event.preventDefault();
  console.log(email);
  let result=await fetch(`http://localhost:5000/delete/${email}`,{
      method:"DELETE",
      headers:{
                'Content-Type':'application/json'
          }
    })
    console.log("result-->"+result);
    if(result){

  alert("DELETE SUCCESS");
navigate("/")
              }
  
}
  const callAboutPage=async()=>{
    try{
const res=await fetch('/about',{
  method:"GET",
  headers:{
    Accept:"applecation/json",
    "Content-Type":"application/json"
  },
  credentials:"include"// cookies shi sa kaam kara
})
const data=await res.json();
console.log(data);
serUserData(data);
if(!res.status==200){
  const error=new Error(res.error);
  throw error;
}
    }
    catch(err){
console.log(err);
// history.push("/login")
navigate('/login');
    }
  }
  useEffect(()=>{
    callAboutPage();

  },[])
  return (
    <>
    {/* className='bg-light' */}
    <div  style={{height:"800px",borderTop:"2px solid black",backgroundColor:"#ebf5fe"}}>
    <div className="container emp-profile" style={{padding:"116px",backgroundImage:`url(${img})`,backgroundRepeat:"no-repeat"}}>
    {/* <div style={{backgroundImage:`url(${img})`}}>

    </div> */}
      <form action="">
        <div className="row">
          <div className="col-md-4">
            {/* <img src="" style={{height:"188px",width:"300px"}} className="pphoto" alt="profile photo" /> */}
          </div>

          
          <div className="col-md-6">
          <div className="profile-head">
            <p>NAME: {useData.name}</p>
            <p> SKILLS: {useData.work}</p>
            <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 9/10</span>  </p>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" >
    <a className="nav-link active"  id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
  </li>
  <li className="nav-item" >
    <a className="nav-link active"  id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"  aria-selected="false">Timeline</a>
  </li>
</ul>
         
          </div>

          </div>

          <div className="col-md-2">
          {/* onClick={deleteProduct(useData.email) */}
          {/* (e) => this.deleteRow(id, e)
          onClick={(e) => this.deleteRow(id, e)} */}
            <button  className="profile-edit-btn" value="Delete" name='btnAddMore' onClick={(e)=>deleteProduct(e,useData.email)} > DELETE PROFILE</button>
            {/* <button  className="profile-edit-btn" value="Delete" name='btnAddMore' > UPDATE</button> */}
            <br />
            <br />
            <button className="profile-edit-btn" >  <Link to={"/update/"+useData.email} style={{ textDecoration: "none",color:"black"}}>UPDATE PROFILE</Link></button>
           
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              {/* <p>SKILLS</p> */}
               {/* <a href="instagram" target="thapa">instagram link</a><br/>
               <a href="instagram" target="thapa">linkedIn link</a><br/>
               <a href="instagram" target="thapa">facebook link</a><br/>
               <a href="instagram" target="thapa">github link</a><br/>
               <a href="instagram" target="thapa">email link</a><br/>
               <a href="instagram" target="thapa">whatsapp link</a><br/> */}
            </div>
          </div>
<div className="col-md-8 pl-5 about-info" >
  <div className="tab-content profile-tab" id='myTabContent'>
    
    

        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab' >
    <br />
        {/* <div className="row">
      <div className="col-md-6">
        <label >{useData.email}</label>
      </div>
      <div className="col-md-6">
        <p>{useData.phone}</p>
      </div>
      </div> */}


      <div className="row mt-3">
      <div className="col-md-6">
        <label >Name</label>
      </div>
      <div className="col-md-6">
        <p>{useData.name}</p>
      </div>
      </div>

      
      <div className="row mt-3">
      <div className="col-md-6">
        <label >Email</label>
      </div>
      <div className="col-md-6">
        <p>{useData.email}</p>
      </div>
      </div>

      
      <div className="row mt-3">
      <div className="col-md-6">
        <label >Phone</label>
      </div>
      <div className="col-md-6">
        <p>{useData.phone}</p>
      </div>
      </div>

      
      <div className="row mt-3">
      <div className="col-md-6">
        <label >profession</label>
      </div>
      <div className="col-md-6">
        <p>{useData.work}</p>
      </div>
      </div>


    </div>
    <div className="tab-pane fade show " id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <br />

     <div className="row mt-3">
      <div className="col-md-6">
        <label > Hourly Rate</label>
      </div>
      <div className="col-md-6">
        <p>10$/hr</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > Total Projects</label>
      </div>
      <div className="col-md-6">
        <p>230</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > English Level</label>
      </div>
      <div className="col-md-6">
        <p>Expert</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > Availability</label>
      </div>
      <div className="col-md-6">
        <p>6 Months</p>
      </div>
     </div>

    </div>
    
  </div>
</div>

        </div>
      </form>
    </div>
    </div> 
    </>
  )
}

export default About