const mongoose= require('mongoose');
const bcrypt=require('bcryptjs')
var jwt = require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
         type:String,
        required:true
    },
    phone:{
         type:Number,
        required:true
    },
     work:{
         type:String,
        required:true
    },
     password:{
         type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true

            }
        }
    ]
    
})
// userSchema.pre('save',async function (next){
//     if(this.isModified('password'))
//     {
    const SECRET_KEY="KARTAVYAABBET!@#$%^&*()!@#$%^&*(";
//         this.password=bcrypt.hash(this.password,12);
//         console.log(this.password);
//         this.cpassword=bcrypt.hash(this.cpassword,12);
//     }
//     next();
// })
// userSchema.pre('save',async function (next){
//     if(this.isNew || this.isModified("password")){
//         const hash=await bcrypt.hash(this.password,10);
//         this.password=hash;
//         console.log(hash);
//     }
//     next();
//     console.log(this,">>>>>>");
// })
userSchema.pre('save',async function (next){
    if(this.isNew || this.isModified("password")){
        const hash=await bcrypt.hash(this.password,10);
        this.password=hash;
      const  hash2=await bcrypt.hash(this.cpassword,12);
      this.cpassword=hash2;
        console.log(hash);
    }
    next();
    // console.log(this,">>>>>>");
})
userSchema.methods.generateAuthToken=async function(){
    try{
        // it is signature 
        // first one is object particular id 
let tokenThapa=jwt.sign({_id:this._id},SECRET_KEY)
// user schema ka ander tokens ka ander store ho jaha // uska ander joh token haa 
this.tokens=this.tokens.concat({token:tokenThapa})
await this.save();
return tokenThapa;
    }
    catch(err)
    {
        console.log(err)
        
    }
}
const User=mongoose.model('USER',userSchema);
module.exports=User;