import { useEffect ,useState} from "react";
function Remaining(){
  const [users, setUsers] = useState(0);
  const [users1, setUsers1] = useState(0);

  
  
  async function login(){

    const response = await fetch('/wcount', {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
     
    });
    const data = await response.json();
    setUsers(data);
    console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
    console.log(data);
    // return data;
  }

  async function login1(){

    const response = await fetch('/hcount', {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
     
    });
    const data = await response.json();
    setUsers1(data);
    console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
    console.log(data);
    // return data;
  }
useEffect(()=>{
  login();
  login1();
},[]);

const [hl, sethl] = useState(20);
  const [wd, setwd] = useState(20);

   return(
    <>
    
    <div class="card">
  <div class="card-header">
    <h1>Remaining Leaves</h1>
  </div>

  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Holiday Leave</h5>
        <p class="card-text">{hl}/{hl-users1}</p>
        <a href="#" class="btn btn-outline-info">Back</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Working Day Leave</h5>
        <p class="card-text">{wd}/{wd-users}</p>
        <a href="#" class="btn btn-outline-info">Back</a>
      </div>
    </div>
  </div>
</div>
</div>

<div style={{marginTop:430+'px',fontSize:10+'px'}}>
<div class="card-body" >
    <blockquote class="blockquote mb-0">
      <p style={{paddingTop:13+'px',fontSize:15+'px',textAlign:'center',opacity:0.5}}>@All Copy Right Reserve  LMS</p>
      <footer ></footer>
    </blockquote>
  </div>
</div>

    
    </>
   )
}

export default Remaining;