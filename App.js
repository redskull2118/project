const mongoose=require('mongoose');
const express = require('express') ;
const app=express();
const jwt= require("jsonwebtoken");
const DB='mongodb+srv://redskull:redskull2118@cluster0.ti3awfp.mongodb.net/mernstack?retryWrites=true&w=majority'; mongoose.connect(DB,{ useNewUrlParser:true, useUnifiedTopology:true }).then(()=>{ console.log(`Connected to DB`); }).catch((err)=>{ console.log(err); })
const User=require('../Backend/models/Usermodel');
const authenticate= require('../Backend/Controller/authenticate');
const bcrypt=require('bcrypt');
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser());

app.post("/register",(req,res)=>{ 
    const {username,email,password}=req.body; 
    console.log(req.body); 
    if(!username || !email || !password) {
     return res.status(400).json({error:"Please fill field"});
     }
     User.findOne({email:email}).then((userexists)=>{ 
    if(userexists) { 
    return res.status(404).json({err:"email already exists"}); 
    }
     const user=new User({username,email,password});///passing data to the schema and then send to nongodb
     user.save().then(()=>{ 
    return res.status(200).json({Message:req.body});
     }).catch((err)=>{ return res.status(500).json({err:"failed to register"}); });
    }).catch((err)=>{ console.log(err); }) });
// const createToken= async ()=>{
//   const token= jwt.sign({_id:"1abcg35673sj4j5jk654339283"},"PARVEZKHANHALDWANIKATHGODAMHDHFJKDKKIXJDJKDKDKKS");
//   console.log(token);
//   const verify = await jwt.verify(token ,"PARVEZKHANHALDWANIKATHGODAMHDHFJKDKKIXJDJKDKDKKS");
//   console.log(verify);
// }
// createToken();
    app.post("/Login", async (req,res)=>
    {
     try{ 
        let token;
        const {email,password}=req.body; 
        console.log(req.body); 

        if(!email || !password) {
            console.log("Please fill field");
            return res.status(400).json({error:"Please fill field"});
        }
         const userLogin= await User.findOne({email :email});
         if(userLogin)
         {
            const isMatch= await bcrypt.compare(password ,userLogin.password);
            token= await userLogin.generateAuthToken();
            res.cookie("jwttoken" ,token ,{
                expires :new Date(Date.now() +25892000000),
                httpOnly:true
            });

            if(!isMatch)
            {
                console.log("Invalid password");
               return res.status(422).json({error:"Invalid password"});
            }
            else
            {
                console.log("Logged in");
              return res.json({message:"Logged in"});
            }
           
         }
         else
         {
            console.log("Invalid email");
            return res.status(422).json({error:"Invalid email"});
         }
       
    }
    catch(err){
          console.log(err);
    }
    });

    app.get("/about",authenticate,(req,res)=>{
        // console.log(req.rootUser);

        res.send(req.rootUser);
    });

    app.listen(8000);
         