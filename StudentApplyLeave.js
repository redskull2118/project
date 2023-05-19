


import React ,{useState} from 'react';
// import {History,useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function StudentApplyLeave()
{
    const navigate =useNavigate();
    const [userRegistration, SetRegistration]= useState({
        studentname:"",
        startdate:"",
        enddate:"",
        purpose:"",
        status:"pending"
        
    });
    const handelinput=(e)=>
    {
        const n=e.target.name;
        const v=e.target.value;
        SetRegistration({...userRegistration,[n]:v});
    }
    

    const PostData= async (e) => {
        e.preventDefault();
        
        const {studentname, startdate, enddate, purpose, status} =userRegistration;
        const res1 = await fetch("/studentapplyleave", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({
                studentname,
                startdate,
                enddate,
                purpose,
                status
            })
 
        });
        console.log("Onclick");
        const res= await res1.json();
        if(res.status===422 || !res)
        {
            window.alert("Invalid Reg");
        }
        else
        {
            window.alert("valid Reg");
            //  history.push("/login");
            // navigate("/Login");
        }
    }

    return(
        <div className="body">
            
        <div className="Rmaindiv">
            
        <form method='POST'>
            
                <label className="c3">Student Name</label>
                <br/>
               
                <input type="text"  className="c1" autoComplete="off" value={userRegistration.studentname} onChange={handelinput} required name="studentname"/>
                <br/>
                <br/>
          
                <label className="c3">Start Date</label>
            <br/>
          
            <input type="text" className="c1" autoComplete="off" value={userRegistration.startdate} onChange={handelinput} required name="startdate"/>
            <br/>
            <br/>

            <label className="c3">End Date</label>
            <br/>
          
            <input type="text" className="c1" autoComplete="off" value={userRegistration.enddate} onChange={handelinput} required name="enddate"/>
            <br/>
            <br/>

            <label className="c3">Purpose</label>         
            <br/> 
            <input type="text"  className="c1" autoComplete="off" value={userRegistration.purpose} onChange={handelinput} required name="purpose"/>
            <br/>
            <br/>

            <label className="c3">Status</label>         
            <br/> 
            <input type="text"  className="c1" autoComplete="off" value={userRegistration.status}  required name="status" disabled/>
            <br/>
            <br/>
                
            <div>
               <button type="submit" id="submit" onClick={PostData}>Submit</button>
           </div>
        </form>
        </div>
       
            </div>
)
}
export default StudentApplyLeave;