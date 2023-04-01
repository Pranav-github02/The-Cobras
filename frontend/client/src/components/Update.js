


import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useParams,useNavigate } from 'react-router-dom';
const Update=()=>{
    const navigate=useNavigate();
  const[user,setUser]=useState({
    name:"",email:"",phone:"",work:""
  })
  const params=useParams();
  let name,value;
  const handleInput=(e)=>{
    console.log(e);
    name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});
  }
  const PostData=async(e)=>{
    e.preventDefault();
    console.log("PP"+params);
    // apna aap relod karna ka
    const{name,email,phone,work}=user;
    const res=await fetch(`http://localhost:5000/update/${params.email}`
    ,{
      method:"PUT",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        name,email,phone,work
      })
    });
     const data=await res.json();
     console.log("the data"+data);
     if(data.status===422|| !data){
      window.alert("Invalid Registeration")
      console.log("Invalid guyss");

     }
     else{
      window.alert("Successfully Registeration")
      console.log("Successfully Change the value");
      navigate("/about");
     }
  }

    return (
     
    <div>
     <section class="vh-100" style={{backgroundColor: '#eee'}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Your Data</p>

                <form class="mx-1 mx-md-4" method='POST'>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" value={user.name} onChange={handleInput}name="name" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control"  value={user.email} onChange={handleInput} name="email"/>
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example3c" class="form-control"  value={user.phone} onChange={handleInput} name="phone"/>
                      <label class="form-label" for="form3Example3c">Phone Number</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" class="form-control" value={user.address} onChange={handleInput} name="address"/>
                      <label class="form-label" for="form3Example3c">Address</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" class="form-control"  value={user.work} onChange={handleInput} name="work"/>
                      <label class="form-label" for="form3Example3c"> Your Profession</label>
                    </div>
                  </div>

                  {/* <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control"  value={user.password} onChange={handleInput} name="password"/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div> */}
{/* 
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" value={user.cpassword} onChange={handleInput} name="cpassword"/>
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}

                  {/* <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  
                  </div> */}
{/* <div>
<center>
<NavLink to="/login" >I am already login</NavLink>
</center>
<br />
<br />
</div> */}
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={PostData}>UPDATE</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
{/* <image></image> */}
                <img src="https://www.fahrenheit211.net/wp-content/uploads/2017/05/UPDATE-graphic.jpg"
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
export default Update


// import React, { useContext, useEffect, useState } from 'react'
// import { NavLink, useParams} from 'react-router-dom'
// // import { updatedata } from './context/ContextProvider'


// const Update = () => {

//     // const [getuserdata, setUserdata] = useState([]);
//     // console.log(getuserdata);

//    const {updata, setUPdata} = useContext("")

//     // const history = useHistory("");

//     const [inpval, setINP] = useState({
//         name: "",
//         email: "",
//         age: "",
//         mobile: "",
//         work: "",
//         add: "",
//         desc: ""
//     })

//     const setdata = (e) => {
//         console.log(e.target.value);
//         const { name, value } = e.target;
//         setINP((preval) => {
//             return {
//                 ...preval,
//                 [name]: value
//             }
//         })
//     }


//     const { id } = useParams("");
//     console.log(id);



//     const getdata = async () => {

//         const res = await fetch(`https://crudappreactjs.herokuapp.com/getuser/${id}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await res.json();
//         console.log(data);

//         if (res.status === 422 || !data) {
//             console.log("error ");

//         } else {
//             setINP(data)
//             console.log("get data");

//         }
//     }

//     useEffect(() => {
//         getdata();
//     }, []);


//     const updateuser = async(e)=>{
//         e.preventDefault();

//         const {name,email,work,add,mobile,desc,age} = inpval;

//         const res2 = await fetch(`https://crudappreactjs.herokuapp.com/updateuser/${id}`,{
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body:JSON.stringify({
//                 name,email,work,add,mobile,desc,age
//             })
//         });

//         const data2 = await res2.json();
//         console.log(data2);

//         if(res2.status === 422 || !data2){
//             alert("fill the data");
//         }else{
//             // history.push("/")
//             setUPdata(data2);
//         }

//     }

//     return (
//         <div className="container">
//             <NavLink to="/">home2</NavLink>
//             <form className="mt-4">
//                 <div className="row">
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputEmail1" class="form-label">Name</label>
//                         <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">email</label>
//                         <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">age</label>
//                         <input type="text" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">Mobile</label>
//                         <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">Work</label>
//                         <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">Address</label>
//                         <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div class="mb-3 col-lg-12 col-md-12 col-12">
//                         <label for="exampleInputPassword1" class="form-label">Description</label>
//                         <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
//                     </div>

//                     <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Update;





