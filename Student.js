
// import mongoose from 'mongoose';
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt= require("jsonwebtoken");
const studentSchema = mongoose.Schema({
   
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    MobileNumber: {
        type: String,
        required: true,
    },
    Department: {
        type: String,
        required: true,
    },
    Parentscontact: {
        type: String,
        required: true,
    },
    StudentId: {
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

studentSchema.pre('save' ,async function(next){
    if(this.isModified('password'))
    {
        this.password= await bcrypt.hash(this.password,12);
    }
    next();
});

studentSchema.methods.generateAuthToken= async function(){
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

const Student = mongoose.model('Students', studentSchema)

module.exports=Student;