import React,{useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
const Signup=()=>{
  const navigate = useNavigate();
  const[user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })
  let name,value;
  const handleInput=(e)=>{
    console.log(e);
    name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});
  }
  const CheckData=(e)=>{
    e.preventDefault();
    const{name,email,phone,work,password,cpassword}=user;
    if(name===""|| email===""||phone===""||work===""||password==="" || cpassword===""){
      window.alert("PLZ ENTER THE FLL DATA");
     
    }
    else{
      PostData();
    }
   
  }
  const PostData=async(e)=>{
    // e.preventDefault();
    // apna aap relod karna ka
    const{name,email,phone,work,password,cpassword}=user;
   
    const res=await fetch("/register",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });
     const data=await res.json();
     if(data.status===422|| !data){
      window.alert("Invalid Registeration")
      console.log("Invalid guyss");

     }
     else{
      window.alert("Successfully Registeration")
      console.log("Successfully register");
      navigate("/login");
     }
  }

    return (
     
    <div style={{backgroundColor:'#eee',height:"1200px"}}>
     <section class="vh-100">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" method='POST'>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input required type="text" id="form3Example1c" class="form-control" value={user.name} onChange={handleInput}name="name" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input required  type="email" id="form3Example3c" class="form-control"  value={user.email} onChange={handleInput} name="email"/>
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input  required  type="number" id="form3Example3c" class="form-control"  value={user.phone} onChange={handleInput} name="phone"/>
                      <label class="form-label" for="form3Example3c">Phone Number</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input  required  type="text" id="form3Example3c" class="form-control" value={user.address} onChange={handleInput} name="address"/>
                      <label class="form-label" for="form3Example3c">Address</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input  required  type="text" id="form3Example3c" class="form-control"  value={user.work} onChange={handleInput} name="work"/>
                      <label class="form-label" for="form3Example3c"> Your Profession</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input required  type="password" id="form3Example4c" class="form-control"  value={user.password} onChange={handleInput} name="password"/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input required  type="password" id="form3Example4cd" class="form-control" value={user.cpassword} onChange={handleInput} name="cpassword"/>
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  
                  </div>
<div>
<center>
<NavLink to="/login" >I am already login</NavLink>
</center>
<br />
<br />
</div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={CheckData}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
{/* <image></image> */}
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>)
}
export default Signup