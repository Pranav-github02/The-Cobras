import React,{useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
const Login=()=>{
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const CheckData=(e)=>{
    e.preventDefault();
    // const{name,email,phone,work,password,cpassword}=user;
    if( email==="" || password==="" ){
      window.alert("PLZ ENTER THE FULL DATA");
     
    }
    else{
      loginUser();
    }
   
  }
   const loginUser=async(e)=>{
    // e.preventDefault();
    const res=await fetch("/signin",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify({
       email,password
      })
    });
    const data=res.json()
    if(data.status===400|| !data){
      window.alert("Invalid Signup")
      console.log("Invalid guyss");

     }
     else{
      window.alert("Successfully Login")
      console.log("Successfully Login");
        // const navigate = useNavigate();
        navigate("/about")
     }
   }
    return (
    <div>
    <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
      

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">LOGIN </p>
          </div>

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} onClick={CheckData}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/signup"
                class="link-danger">Register</NavLink></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section>
    </div>)
}
export default Login