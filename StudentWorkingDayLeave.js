import { useEffect, useState } from 'react';

function StudentWorkingDayLeave(){
    const [users, setUsers] = useState([]);
  
    async function login(){
  
      const response = await fetch('http://localhost:8000/abc', {
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
       
      });
      const actualdata = await response.json();
      setUsers(actualdata.data);
      console.log(actualdata.data);
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
    return(
        <>
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
        )  
      })}
    
    
  </tbody>

</table>
        
        </>
    )
}

export default StudentWorkingDayLeave;