const express=require('express');

var cors = require('cors')
// var app = express()
 

const dotenv=require("dotenv");
const mongoose =require('mongoose');
const app=express();
app.use(cors())
const User=require('./models/userSchema');
const cookieParser = require('cookie-parser')
app.use(cookieParser())
// json nhi smjtha
// koi data fill kara reha  humra data smja
// koi be json ki tara data aya usko json maha convert kardo
app.use(express.json());

// app.use(cors());
// 1 more mistake pta chali 
// if we not use the express after 12 it show un defined
app.use(require('./router/auth.js'));


const DB="mongodb+srv://Kartavyaabbet:Abbet123@cluster0.zttkcrj.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose.connect(DB).then(()=>{
    console.log(`Connection Successfull`);
}).catch((err)=> console.log(`no connection`));
app.get('/',(req,res)=>{
    res.send(`Hello guts`)
});

console.log("hiii")
app.listen(5000,()=>{
    console.log("now working")
})