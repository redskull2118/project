import StudentApplyLeave from './StudentApplyLeave'

function StudentApplyLeaveNavbar(){
    return(
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student Portal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
       
<button type="text"  data-mdb-toggle="modal" data-mdb-target="#exampleModal" style={{background:'none',boxShadow:'none',paddingTop:8+'px', border:'none'}}>
 Appy holiday leave 
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Apply Leave</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"><StudentApplyLeave/></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </li>

        <li class="nav-item">
       
       <button type="text"  data-mdb-toggle="modal" data-mdb-target="#exampleModal" style={{background:'none',boxShadow:'none',paddingTop:8+'px', border:'none'}}>
         Apply WD Leave
       </button>
       {/* <p data-mdb-toggle="modal" data-mdb-target="#exampleModal">apply</p> */}
       
       
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">Apply Leave</h5>
               <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body"><StudentApplyLeave/></div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
               
             </div>
           </div>
         </div>
       </div>
               </li>


        <li class="nav-item">
          <a class="nav-link" href="#">Logout</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}

export default StudentApplyLeaveNavbar;