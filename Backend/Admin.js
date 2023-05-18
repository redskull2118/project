
// import mongoose from 'mongoose';
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt= require("jsonwebtoken");
const adminSchema = mongoose.Schema({
   
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
    
}, {
    timestamps: true
})

adminSchema.pre('save' ,async function(next){
    if(this.isModified('password'))
    {
        this.password= await bcrypt.hash(this.password,12);
    }
    next();
});

adminSchema.methods.generateAuthToken= async function(){
    try{
        const token= jwt.sign({_id:this._id},"MYNAMEISPARVEZKHANPRANALIVANIHALDWANIKATHGODAM");
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        console.log(token);
        return token;
    }
    catch(err){
        res.send(err);
    }
}

const Admin = mongoose.model('Admin', adminSchema)

module.exports=Admin;