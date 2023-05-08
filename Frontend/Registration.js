import React ,{useState} from 'react';
// import {History,useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Registration()
{
    const navigate =useNavigate();
    const [userRegistration, SetRegistration]= useState({
        username:"",
        email:"",
        password:""
        
    });
    const handelinput=(e)=>
    {
        const n=e.target.name;
        const v=e.target.value;
        SetRegistration({...userRegistration,[n]:v});
    }
    
    // const [allentry,SetEntry]=useState([]);
    // const submitform=(e)=>{
    //    e.preventDefault();
    //    const newEntry={...userRegistration};
    //    SetEntry([...allentry, newEntry]);
    //    SetRegistration({ username:"",
    //    email:"",
    //    password:""});
    // }

    const PostData= async (e) => {
        e.preventDefault();
        
        const {username, email, password} =userRegistration;
        const res1 = await fetch("/register", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({
                username ,email, password
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
            navigate("/Login");
        }
    }

    return(
        <div className="body">
            <div className="d1">
               <center><h1> REGISTER HERE</h1></center>
            </div>
        <div className="Rmaindiv">
            
        <form method='POST'>
            
                <label className="c3">UserName</label>
                <br/>
               
                <input type="text"  className="c1" autoComplete="off" value={userRegistration.username} onChange={handelinput} required name="username"/>
                <br/>
                <br/>
          
                <label className="c3">Email</label>
                <br/>
              
                <input type="email" className="c1" autoComplete="off" value={userRegistration.email} onChange={handelinput} required name="email"/>
                <br/>
                <br/>

                <label className="c3">Password</label>         
                <br/> 
                <input type="password"  className="c1" autoComplete="off" value={userRegistration.password} onChange={handelinput} required name="password"/>
                <br/>
                <br/>
            <div>
               <button type="submit" id="submit" onClick={PostData}>Submit</button>
           </div>
        </form>
        </div>
        {/* <div className="p1">
            {
             allentry.map((number)=>{
                 return (
                     <div className="d11">
                         <p className="d22">{number.username}</p>
                         <p className="d22">{number.email}</p>
                         <p className="d22">{number.age}</p>
                         <p className="d22">{number.password}</p>
                         </div>
                 )
             })
            }
            </div> */}
            </div>
)
}
export default Registration;