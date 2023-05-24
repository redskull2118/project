import React ,{useEffect, useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import 'C:/Users/ADMIN/Desktop/React/client/src/App.css';
function Addstudent(){
    const Navigate= useNavigate();
    const [userRegistration, SetRegistration]= useState({
      username:"",
      email:"",
      MobileNumber:"",
      Department:"",
      Parentscontact:"",
      StudentId:"",
      password:""
      
  });
  const handelinput=(e)=>
  {
      const n=e.target.name;
      const v=e.target.value;
      SetRegistration({...userRegistration,[n]:v});
  }
  
  const PostData= async (e) => {
    e.preventDefault();
    
    const { username,email,MobileNumber,Department,Parentscontact,StudentId,password} =userRegistration;
    const res1 = await fetch("/addstudent", {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body :JSON.stringify({
          username,email,MobileNumber,Department,Parentscontact,StudentId,password
        })
  
    });
    console.log("Onclick");
    const res= await res1.json();
    if(res.status!=200 || !res)
    {
        window.alert("Invalid Reg");
        Navigate('/viewallstudent');
    }
    else
    {
        window.alert("valid Reg");
      
    }
  }
    return(
        <>

{/* <form method='POST'>
        <div >
        <label className="c3 ap-fon">Name</label>
        <br/>
        <input className="c1 ap-he-wd form-control  " type="text" value={userRegistration.username} onChange={handelinput} required name="username" />
      </div>

     <br/>
     
      <div >
        <label className="c3 ap-fon">Email</label>
        <br/>
        <input className="c1 ap-he-wd form-control  " type="text" value={userRegistration.email} onChange={handelinput} required name="email" />
      </div>
      <br/>
    
      <div>
        <label className="c3 ap-fon">Mobile Number</label>
        <br/>
        <input className="c1 ap-he-wd form-control  " type="email" value={userRegistration.MobileNumber} onChange={handelinput} required name="MobileNumber" />
      </div>

      <br/>
      <div >
        <label className="c3 ap-fon">Department</label>
        <br/>
        <input className="c1 ap-he-wd form-control  " type="String" value={userRegistration.Department} onChange={handelinput} required name="Department" />
      </div>
      <br/>
      <div >
        <label className="c3 ap-fon" >Parent's Contact</label>
        <br/>
        <input className="c1 ap-he-wd form-control  " type="String" value={userRegistration.Parentscontact} onChange={handelinput} required name="Parentscontact" />
      </div>
      <br/>
      <div >
        <label className="c3 ap-fon" >Student Id</label>
        <br/>
        <input className="c1 ap-he-wd form-control  " type="String" value={userRegistration.StudentId} onChange={handelinput} required name="StudentId"/>
      </div>
      <br/>
    
      <div >
        <label  className="c3 ap-fon" >password</label>
        <br/>
        <input className="c1 ap-he-wd form-control  " type="password" value={userRegistration.password} onChange={handelinput} required name="password" />
      </div>
      <br/>
      <button type="Submit" onClick={PostData} className='ap-he-wd btn btn-light btn-outline-secondary btn-block' >Add</button>
      </form> */}
      <section class="vh-100 bg-image"
  style={{height:100+"%",backgroundImage:"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div class="mask d-flex align-items-center h-auto gradient-custom-3">
    <div class="container h-auto">
      <div class="row d-flex justify-content-center align-items-center h-auto">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: 15+"px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Add a Student</h2>

              <form method='POST'>
              <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Student Name </label>  
                    <input type="email" class="form-control form-control-sm hi"  id="exampleInputEmail1"  value={userRegistration.username} onChange={handelinput}autoComplete="off" aria-describedby="emailHelp"  required name="username" />  
          </div> 
                <br/>
<div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Student Email </label>  
                    <input type="email" class="form-control form-control-sm hi" id="exampleInputPassword1" value={userRegistration.email} onChange={handelinput}autoComplete="off"  required name="email" />  
          </div>  
                <br/>
                
                <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Mobile Number </label>  
                    <input type="String" class="form-control form-control-sm hi"  id="exampleInputEmail1" value={userRegistration.MobileNumber} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp"  required name="MobileNumber" />  
          </div> 
                <br/>
<div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Parent's Contact </label>  
                    <input type="String" class="form-control form-control-sm hi" id="exampleInputPassword1" value={userRegistration.Parentscontact} onChange={handelinput} autoComplete="off"  required name="Parentscontact" />  
          </div>  
                <br/>
                <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Department</label>  
                    <input type="String" class="form-control form-control-sm hi"  id="exampleInputEmail1"  value={userRegistration.Department} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp"  required name="Department" />  
          </div> 
                <br/>
                <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Student Id</label>  
                    <input type="String" class="form-control form-control-sm hi"  id="exampleInputEmail1"  value={userRegistration.StudentId} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp"  required name="StudentId" />  
          </div> 
                <br/>
<div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Password </label>  
                    <input type="password" class="form-control form-control-sm hi" id="exampleInputPassword1"  value={userRegistration.password} onChange={handelinput} autoComplete="off"  required name="password" />  
          </div>  
                <br/>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={PostData}>Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
export default Addstudent;