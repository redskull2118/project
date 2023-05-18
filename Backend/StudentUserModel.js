const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
   
    studentname: {
        type: String,
        required: true,
    },
    startdate: {
        type: String,
        required: true,
        
    },
    enddate: {
        type: String,
        required: true
    },
purpose: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})


const User1 = mongoose.model('StudentLeaveApplication', userSchema)

module.exports=User1;