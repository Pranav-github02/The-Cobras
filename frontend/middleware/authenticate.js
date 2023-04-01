const jwt=require('jsonwebtoken')
const User=require("../models/userSchema")

const Authenicate=async(req,res,next)=>{
    try{
        const SECRET_KEY="KARTAVYAABBET!@#$%^&*()!@#$%^&*(";

const token=req.cookies.jwtoken;
// verify the token
// fir sara data aha jaha gya
const verifyToken=jwt.verify(token,SECRET_KEY);
// joh tokens.token in data base
const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token});
if(!rootUser){
    throw new Error('User not found')
}
req.token=token;
req.rootUser=rootUser;
req.userID=rootUser._id;
next();
    }catch(err){
        res.status(401).send('Unauthorized :No token provide');
console.log(err)
    }

}
module.exports=Authenicate