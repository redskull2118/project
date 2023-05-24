const mongoose=require('mongoose');
const express = require('express') ;
const app=express();
const jwt= require("jsonwebtoken");
const DB='mongodb+srv://redskull:redskull2118@cluster0.ti3awfp.mongodb.net/StudentApplicationData?retryWrites=true&w=majority'; mongoose.connect(DB,{ useNewUrlParser:true, useUnifiedTopology:true }).then(()=>{ console.log(`Connected to DB`); }).catch((err)=>{ console.log(err); })
const User=require('../Backend/models/Usermodel');
const Admin=require('../Backend/models/Usermodel');
const Student=require('../Backend/models/Student');
const User1=require('../Backend/models//StudentUserModel');
const warden=require('../Backend/models//WardenSchema');
const hod=require('../Backend/models//HodSchema');
const authenticate= require('../Backend/Controller/authenticate');
const bcrypt=require('bcrypt');
const cookieParser = require('cookie-parser')
const cors=require('cors');
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.post("/register",(req,res)=>{ 
//     const {username,email,password}=req.body; 
//     console.log(req.body); 
//     if(!username || !email || !password) {
//      return res.status(400).json({error:"Please fill field"});
//      }
//      User.findOne({email:email}).then((userexists)=>{ 
//     if(userexists) { 
//     return res.status(404).json({err:"email already exists"}); 
//     }
//      const user=new User({username,email,password});///passing data to the schema and then send to nongodb
//      user.save().then(()=>{ 
//     return res.status(200).json({Message:req.body});
//      }).catch((err)=>{ return res.status(500).json({err:"failed to register"}); });
//     }).catch((err)=>{ console.log(err); }) });


    app.post("/register",(req,res)=>{ 
        const {username,email,password}=req.body; 
        console.log(req.body); 
        if(!username || !email || !password) {
         return res.status(400).json({error:"Please fill field"});
         }
         Student.findOne({email:email}).then((userexists)=>{ 
        if(userexists) { 
        return res.status(404).json({err:"email already exists"}); 
        }
         const user=new Student({username,email,password});///passing data to the schema and then send to nongodb
         user.save().then(()=>{ 
        return res.status(200).json({Message:req.body});
         }).catch((err)=>{ return res.status(500).json({err:"failed to register"}); });
        }).catch((err)=>{ console.log(err); }) });


        ///WardenRegister
        app.post("/registerwarden",(req,res)=>{ 
            const {email,password}=req.body; 
            console.log(req.body); 
            if( !email || !password) {
             return res.status(400).json({error:"Please fill field"});
             }
             warden.findOne({email:email}).then((userexists)=>{ 
            if(userexists) { 
            return res.status(404).json({err:"email already exists"}); 
            }
             const user=new warden({email,password});///passing data to the schema and then send to nongodb
             user.save().then(()=>{ 
                console.log(req.body); 
            return res.status(200).json({Message:req.body});
             }).catch((err)=>{ return res.status(500).json({err:"failed to register"}); });
            }).catch((err)=>{ console.log(err); }) });

        app.post("/addstudent",(req,res)=>{ 
            const {username,email,MobileNumber,Department,Parentscontact,StudentId,password}=req.body; 
           
            if(!username || !email  ||!StudentId|| !password) {
                console.log("Please fill field"); 
             return res.status(400).json({error:"Please fill field"});

             }
            //  Student.findOne({email:email}).then((userexists)=>{ 
            // if(userexists) { 
            //     console.log("email already exists"); 
            // return res.status(404).json({err:"email already exists"}); 
            // }
             const user=new Student({username,email,MobileNumber,Department,Parentscontact,StudentId,password});///passing data to the schema and then send to nongodb
             user.save().then(()=>{ 
                console.log("data added"); 
            return res.status(200).json({Message:req.body});
             }).catch((err)=>{
                console.log(err);
                 return res.status(500).json({err:"failed to register"}); });
            // }).catch((err)=>{ console.log(err); })
         });
// const createToken= async ()=>{
//   const token= jwt.sign({_id:"1abcg35673sj4j5jk654339283"},"PARVEZKHANHALDWANIKATHGODAMHDHFJKDKKIXJDJKDKDKKS");
//   console.log(token);
//   const verify = await jwt.verify(token ,"PARVEZKHANHALDWANIKATHGODAMHDHFJKDKKIXJDJKDKDKKS");
//   console.log(verify);
// }
// createToken();
app.get('/abc', (req,res)=>{
    User1.find({}).then((items)=>{
        res.json(items);
    }).catch((err)=>{
        console.log(err);
    })
    
  });
  //get all studdent
  app.get('/vals', (req,res)=>{
    Student.find({}).then((items)=>{
        res.json(items);
    }).catch((err)=>{
        console.log(err);
    })
    
  });
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
         const userLogin= await Admin.findOne({email :email});
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
//Get student and update request
app.get('/:id', (req,res)=>{
    console.log(req.params.id);
    User1.findById(req.params.id).then((items)=>{
        res.json(items);
    }).catch((err)=>{
        console.log(err);
    })
    
  });

  app.post('/user/:id', async (req,res)=>{
    let user2= req.body;
    console.log(user2);
    const updateuser =new User1(user2);
   
    // User1.updateOne({_id:req.params.id},updateuser).then((items)=>{
    //     res.status(201).json(items);
    try{
     await User1.updateOne({ _id:req.params.id},updateuser);
     res.status(201).json(updateuser);
    }
    catch(err){
        console.log("error occuresd");
    }
    
  });
  

///// HOD LOGIN
    app.post("/LoginHod", async (req,res)=>
    {
     try{ 
        // let token;
        const {email,password}=req.body; 
        console.log(req.body); 

        if(!email || !password) {
            console.log("Please fill field");
            return res.status(400).json({error:"Please fill field"});
        }
         const userLogin= await hod.findOne({email :email});
         if(userLogin)
         {
            const isMatch= await bcrypt.compare(password ,userLogin.password);
            // token= await userLogin.generateAuthToken();
            // res.cookie("jwttoken" ,token ,{
            //     expires :new Date(Date.now() +25892000000),
            //     httpOnly:true
            // });

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
    /// Login Warden
    app.post("/Loginwarden", async (req,res)=>
    {
     try{ 
        // let token;
        const {email,password}=req.body; 
        console.log(req.body); 

        if(!email || !password) {
            console.log("Please fill field");
            return res.status(400).json({error:"Please fill field"});
        }
         const userLogin= await warden.findOne({email :email});
         if(userLogin)
         {
            const isMatch= await bcrypt.compare(password ,userLogin.password);
            // token= await userLogin.generateAuthToken();
            // res.cookie("jwttoken" ,token ,{
            //     expires :new Date(Date.now() +25892000000),
            //     httpOnly:true
            // });

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
         