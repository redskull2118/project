import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import "../App.css";

function Home(){
    return(
        <div style={{backgroundColor:"whitesmoke"}}>
       
        <center>
  <div class="card" style={{backgroundColor:"#007a99"}}>
  <div class="card-body">
   <h1 style={{color:"white"}}>Leave Management System</h1> 
  </div>
</div>
</center>

  <div style={{display:'flex', marginLeft:30+'px',marginTop:100+'px',marginRight:30+'px'}}>
  <div class="card" style={{width: 20+'rem', marginLeft:110+'px', marginRight:30+'px'}} >
  <img src="https://www.albertamusic.org/wp-content/uploads/icon-blu-company.png"  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title"><b>Student Portal</b></h3>
    <Link to="Login" style={{backgroundColor:"#007a99"}} class="btn btn-primary"><b>Login as Student</b></Link>

  </div>
</div> 

<div class="card" style={{width: 20+'rem',marginLeft:110+'px',marginRight:30+'px'}}>
<img src="https://www.albertamusic.org/wp-content/uploads/icon-blu-company.png" class="card-img-top" alt="..."/>
 <div class="card-body">
    <h3 class="card-title"><b>Warden Portal</b></h3>
    <Link to="/wardenregister" style={{backgroundColor:"#007a99"}} class="btn btn-primary"><b>Login as Warden</b></Link>
  </div>
</div>

<div class="card" style={{width: 20+'rem',marginLeft:110+'px'}}>
<img src="https://www.albertamusic.org/wp-content/uploads/icon-blu-company.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title"><b>HOD Portal</b></h3>
    <Link to="/Hodregister" style={{backgroundColor:"#007a99"}} class="btn btn-primary"><b>Login as HOD</b></Link>
 
   
  </div>
</div>
</div>
{/* <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Hod Portal</h5>
       
        <Link to="/Hodregister" style={{backgroundColor:"#007a99"}} class="btn btn-primary"><b>Login as HOD</b></Link>
 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Warden Portal</h5>
        <Link to="/wardenregister" style={{backgroundColor:"#007a99"}} class="btn btn-primary"><b>Login as Warden</b></Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title">Student Portal</h5>
        <Link to="Login" style={{backgroundColor:"#007a99"}} class="btn btn-primary"><b>Login as Student</b></Link>
      </div>
      
    </div>
  </div>
</div> */}
        </div>
    )
}

export default Home;