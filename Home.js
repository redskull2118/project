import {Link} from 'react-router-dom';
import StudentApplyLeaveNavbar from './StudentApplyLeaveNavbar'
// import WorkingDayLeave from './WorkingDayLeave'

function Home(){
    return(
        <>
        <StudentApplyLeaveNavbar/>
        <div style={{display:'flex', marginLeft:30+'px',marginTop:40+'px', border:1+'px solid black',marginRight:30+'px' }}>
        <div class="card"  style={{width: 18+'rem',marginLeft:110+'px'}}>
  <div class="card-body">
    <h1 class="card-title">Leaves</h1>
    <h6 class="card-subtitle mb-2 text-body-secondary">  </h6>
    <p class="card-text"><h4>Remaining Leave: 20/20</h4></p>
    
  </div>
</div>

<div class="card"  style={{width: 18+'rem',marginLeft:110+'px'}}>
  <div class="card-body">
    <h5 class="card-title">Working Day Leave </h5>
    <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <Link to="/studentlogin">W D L</Link> */}
    <Link to="/studentworkingdayleave">W D L</Link>
    {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
  </div>
</div>

<div class="card"  style={{width: 18+'rem',marginLeft:110+'px'}}>
  <div class="card-body">
    <h5 class="card-title">Holiday Leave</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>

{/* <Router>

</Router> */}
        </>
    )
}

export default Home;