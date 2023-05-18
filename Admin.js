import Login from '../Component/Login';
import React ,{useEffect, useState} from 'react';
function Admin(){
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
  }
  else
  {
      window.alert("valid Reg");
  }
}
const [users, setUsers] = useState([]);
  
    async function login(){
  
      const response = await fetch('http://localhost:8000/abc', {
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
       
      });
      const data = await response.json();
      setUsers(data);
      console.log(data);
      // return data;
    }
useEffect(()=>{
   login();
},[])
const color=(a)=>{
  if(a=='pending')
  {
    return(
      <>
      <p style={{color:"yellow"}}> Pending</p>
      </>
    )
  }
  else if(a=='approved')
  {
    return(
      <>
      <p style={{color:"green"}}>Approved</p>
      </>
    )
  }
  else{
    return(
      <>
      <p style={{color:"red"}}>Rejected</p>
      </>
    )

  }
}
    return (
     <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LMS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
<button type="button" class="btn" Style={{backgroundColor:"white", boxShadow:"none"}} data-mdb-toggle="modal" data-mdb-target="#exampleModal">
 AddStudent
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form method='POST'>
        <div >
        <label >Name</label>
        <br/>
        <input type="text" value={userRegistration.username} onChange={handelinput} required name="username" />
      </div>

     <br/>
     
      <div >
        <label>Email</label>
        <br/>
        <input type="text" value={userRegistration.email} onChange={handelinput} required name="email" />
      </div>
      <br/>
    
      <div>
        <label>Mobile Number</label>
        <br/>
        <input type="email" value={userRegistration.MobileNumber} onChange={handelinput} required name="MobileNumber" />
      </div>

      <br/>
      <div >
        <label >Department</label>
        <br/>
        <input type="String" value={userRegistration.Department} onChange={handelinput} required name="Department" />
      </div>
      <br/>
      <div >
        <label >Parent's Contact</label>
        <br/>
        <input type="String" value={userRegistration.Parentscontact} onChange={handelinput} required name="Parentscontact" />
      </div>
      <br/>
      <div >
        <label >Student Id</label>
        <br/>
        <input type="String" value={userRegistration.StudentId} onChange={handelinput} required name="StudentId"/>
      </div>
      <br/>
    
      <div >
        <label >password</label>
        <br/>
        <input type="password" value={userRegistration.password} onChange={handelinput} required name="password" />
      </div>
      <br/>
      <button type="Submit" onClick={PostData} class="btn btn-primary">Add</button>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
      </div>
  
    </div>
  </div>
</div>

        <li class="nav-item">
          <a class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
   


   {/* Displaying all student requests */}
   <h1>Working DAY LEAVE</h1>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Type of Leave</th>
      <th scope="col"> WARDEN's Status</th>
      <th scope="col"> HOD's Status</th>
      
    </tr>
  </thead>
<tbody>
  {users.map(a=>{
          return(
            <tr>
      <td>{a.studentname}</td>
      <td>{a.startdate}</td>
      <td>{a.enddate}</td>
      <td>{a.purpose}</td>
      <td>{color(a.status)}</td>
      <td>{color(a.status)}</td>
    </tr>


        // <li>{a.studentname}</li>
         
        )  
      })}
    
    
  </tbody>

</table>

     </>
    )
}
export default Admin;