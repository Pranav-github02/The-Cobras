const express=require('express');
var jwt = require('jsonwebtoken');
// import cors from 'cors';
// app.use(cors());


const router=express.Router();
const authenicate=require('../middleware/authenticate')
const bcrypt =require('bcryptjs')
router.get('/',(req,res)=>{
    res.send(`Hello world`);
})
const User=require('../models/userSchema.js')
router.post('/register',async(req,res)=>{
    console.log(req.body);
    // if we have to show email req.body.email
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
return res.json({error:"plz enter full data"});
    }
   const userExist=await User.findOne({email:email})
   if(userExist){
    return res.status(422).json({error:"Email already Exist"});
   }

  
    const user=new User({name,email,phone,work,password,cpassword});
    // pehla password ko hash kara gya
    // const userLogin= await User.findOne({email:email});

    
    const userRegister= await user.save();
    if(userRegister){
        res.status(201).json({message:"user register Successfuly"});
    }
   
    // res.json({message:req.body})
})
// login route
router.post('/signin',async (req,res)=>{
    // console.log(req.body);
    // res.json({message:"Awesome"});
    try{
const {email,password}=req.body;
if(!email || !password){
    return res.status(400).json({errorL:"plz enter full data"})
}
const userLogin= await User.findOne({email:email});
const isaMatch= await bcrypt.compare(password,userLogin.password);
let token;
if(userLogin){
    token=await userLogin.generateAuthToken();
    console.log(token)
    // cookiee
    res.cookie("jwtoken",token,{
// automatically sign out ho jaha gya
expires:new Date(Date.now()+25892000000),
httpOnly:true// nhi toh https
    })
console.log(userLogin);
if(!isaMatch){
res.json({error:"Invalid "});
}
else{
res.json({message:"yes matched"})
}
}
else{
    res.json({error:"Invalid Token"});
}






    }
    catch(err){
console.log(err);
    }
})


router.get('/about',authenicate,(req,res)=>{
    console.log("hello my about");
    res.send(req.rootUser);
})
router.delete('/delete/:email',async(req,res)=>{
    const result=await User.deleteOne({email:req.params.email});
    res.send(result);
})
router.get('/update/:email',async(req,res)=>{
    let result=await User.findOne({email:req.params.email});
    if(result){
        res.send(result);

    }
    else{
        res.send("no result oops")
    }
})


router.put('/update/:email',async(req,res)=>{
    // const email=req.body.email;

    // const userLogin= await User.findOne({email:email});
    let result=await User.updateOne({email:req.params.email},{
        $set:req.body
    })
    res.send(result);
})
module.exports=router;