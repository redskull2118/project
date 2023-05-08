import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
function Login(){
      
    // const [userLogin, SetLogin]= useState({
    //     email:"",
    //     password:""
        
    // });
    const navigate =useNavigate();
    const [email , Setemail]= useState('');
    const [password , SetPassword]= useState('');
    // const handelinput=(e)=>
    // {
    //     const n=e.target.name;
    //     const v=e.target.value;
    //     SetLogin({...userLogin,[n]:v});
    // }

    const PostData= async (e) => {
        e.preventDefault();
        
        const res = await fetch("/Login", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({
               email, password
            })
 
        });
    
        const data= await res.json();
        console.log(data);
        if(res.status===400|| res.status===422 || !data)
        {
            window.alert("Login failed");
        }
        else
        {
            window.alert("Logged  from ui in");
              navigate("/");
        }
    }
    return(
        <>
        <div className="body">
        <div className="d1">
           <center><h1>Login</h1></center>
        </div>
    <div className="Rmaindiv">
        
    <form method='POST'>
      
            <label className="c3">Email</label>
            <br/>
          
            <input type="email" className="c1" autoComplete="off" value={email} onChange={(e)=>Setemail(e.target.value)} required name="email"/>
            <br/>
            <br/>

            <label className="c3">Password</label>         
            <br/> 
            <input type="password"  className="c1" autoComplete="off" value={password} onChange={(e)=>SetPassword(e.target.value)} required name="password"/>
            <br/>
            <br/>
        <div>
           <button type="submit" id="submit" onClick={PostData}>Submit</button>
       </div>
    </form>
    </div>
    </div>
    </>
    )
}
export default Login;