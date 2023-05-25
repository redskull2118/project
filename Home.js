import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import StudentApplyLeaveNavbar from './StudentApplyLeaveNavbar'
// import WorkingDayLeave from './WorkingDayLeave'
import '../App.css';
import StudentApplyLeave from './StudentApplyLeave'
import AWDL from './AWDL';

function Home(){
  // const [users, setUsers] = useState([]);
  
  // async function login(){

  //   const response = await fetch('http://localhost:8000/abc', {
  //     method:'GET',
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
     
  //   });
  //   const actualdata = await response.json();
  //   setUsers(actualdata.data);
  //   console.log(actualdata.data);
  //   // return data;
  // } 

  // useEffect(()=>{
  //   login();
  // },[])

  // const color=(a)=>{
  //   if(a=='pending')
  //   {
  //     return(
  //       <>
  //       <p style={{color:"yellow"}}> Pending</p>
  //       </>
  //     )
  //   }
  //   else if(a=='approved')
  //   {
  //     return(
  //       <>
  //       <p style={{color:"green"}}>Approved</p>
  //       </>
  //     )
  //   }
  //   else{
  //     return(
  //       <>
  //       <p style={{color:"red"}}>Rejected</p>
  //       </>
  //     )

  //   }
  // }

    return(
        <>
        <StudentApplyLeaveNavbar/>
      
      <div >
      {/* <div class="row " style={{margin:70+'px',marginTop:30+'px'}}>
  <div class="col sha hov " >
    <div class="card h-100 border comcol  " style={{border:'none'}}>
      
     <div class="card-body comcol ">
        <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Remaining Leaves</b></h2></center>
        
      </div>
     
    </div>
  </div>

  <div class="col sha hov " >
    <div class="card h-100 border comcol  " style={{border:'none'}}>
      
     <div class="card-body comcol " style={{paddingTop:37+'px'}}>
        <center><h2 class="card-title " ><Link to="/studentapplyleave" className='leave'>Remaining Leaves</Link></h2></center>
        
      </div>
     
    </div>
  </div>


  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px'}}>

      <button type="text"  data-mdb-toggle="modal" data-mdb-target="#exampleModal" style={{background:'none',boxShadow:'none',paddingTop:8+'px', border:'none', color:" #0E2431"}}>
 Apply Working Day leave 
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Apply Leave</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"><AWDL/></div>
      
    </div>
  </div>
</div>
        
        
        </h2></center>
      </div>
      
    </div>
  </div> 
   <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol ">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px'}}>
      <button type="text"  data-mdb-toggle="modal" data-mdb-target="#exampleModal" style={{background:'none',boxShadow:'none',paddingTop:8+'px', border:'none', color:" #0E2431"}}>
 Apply holiday leave 
</button>


<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header ap-col">
        <h5 class="modal-title ap-col" id="exampleModalLabel">Apply Leave</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"><StudentApplyLeave/></div>
      
    </div>
  </div>
</div>
        
        
        </h2></center>
      </div>
      
    </div>
  </div>
</div> */}


<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:70+'px',marginTop:30+'px'}}>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      
     <div class="card-body comcol" >
     <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Remaining Leaves</b></h2></center>
      </div>
     
    </div>
  </div>
  
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to='/studentworkingdayleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>View H L</b></h2></center>
      </div>
    </Link> 
    </div>
  </div>

  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to='/studentworkingdayleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>View W D L</b></h2></center>
      </div>
    </Link>
      
    </div>
  </div>
</div>


<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:70+'px'}}>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      
    <Link to='/studentapplywdleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>Apply W D L</b></h2></center>
      </div>
    </Link>
     
    </div>
  </div>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to='/studentapplyleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>Apply H L</b></h2></center>
      </div>
    </Link>
      
    </div>
  </div>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol" style={{pointerEvents:"none"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Calender</b></h2></center>
      </div>
      
    </div>
  </div>
</div>


<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:70+'px'}}>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      
     <div class="card-body comcol" style={{pointerEvents:"none"}}>
     <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Sports</b></h2></center>
      </div>
     
    </div>
  </div>
  <div class="col sha hov ">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol" style={{pointerEvents:"none"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Assignment</b></h2></center> </div>
      
    </div>
  </div>
  <div class="col sha hov ">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol" style={{pointerEvents:"none"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Change Password</b></h2></center>
      </div>
      
    </div>
  </div>
</div>
</div>
{/* // <center><h2 style={{marginTop:15+'px',marginBottom:20+'px'}}>Working DAY LEAVE</h2></center>

//       <table class="table " style={{backgroundColor:"rgb(245, 245, 245)",fontFamily:"'Poppins',sans-serif"}}>
//   <thead style={{backgroundColor:"rgb(222, 238, 252)",color:"#0E2431"}}>
//     <tr>
//       <th scope="col">Student Name</th>
//       <th scope="col">Start Date</th>
//       <th scope="col">End Date</th>
//       <th scope="col">Type of Leave</th>
//       <th scope="col"> WARDEN's Status</th>
//       <th scope="col"> HOD's Status</th>
      
//     </tr>
//   </thead>
//   <tbody style={{color:"#6883BC" ,fontFamily:"'Poppins',sans-serif"}}> */}
   {/* {users.map(a=>{ */}
{/* //           return(
//             <tr>
//       <td>{a.studentname}</td>
//       <td>{a.startdate}</td>
//       <td>{a.enddate}</td>
//       <td>{a.purpose}</td>
//       <td>{color(a.status)}</td>
//       <td>{color(a.status)}</td>
//     </tr>


//         // <li>{a.studentname}</li>
         
//         )  
//       })}
    
    
//   </tbody>

// </table> */}


        </>
    )
}

export default Home;