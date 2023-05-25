import '../App.css';
import React ,{useState} from 'react';
// import {History,useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function StudentApplyLeave()
{
    const navigate =useNavigate();
    const [userRegistration, SetRegistration]= useState({
        studentname:"",
        startdate:"",
        enddate:"",
        purpose:"",
        wardenstatus:"Pending",
        hodstatus:"Pending"
        
    });
    const handelinput=(e)=>
    {
        const n=e.target.name;
        const v=e.target.value;
        SetRegistration({...userRegistration,[n]:v});
    }
   

    const PostData= async (e) => {
        e.preventDefault();
        
        const {studentname, startdate, enddate, purpose, wardenstatus,hodstatus} =userRegistration;
        const res1 = await fetch("/holidayleave", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({
                studentname,
                startdate,
                enddate,
                purpose,
                wardenstatus,
                hodstatus
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
            navigate("/");
        }
    }

    return(
       
            
        // <div className="ap-col">
            
        // <form method='POST'>
        //     <center>
        //         <label className="c3 ap-fon"> Student Name</label>
        //         <br/>
        //         <input type="text"  className="c1 ap-he-wd form-control  " autoComplete="off" value={userRegistration.studentname} onChange={handelinput} required name="studentname" />
        //         <br/>
        //         <br/>
          
        //         <label className="c3 ap-fon">Start Date</label>
        //     <br/>
          
        //     <input type="text" className="c1 ap-he-wd form-control " autoComplete="off" value={userRegistration.startdate} onChange={handelinput} required name="startdate"/>
        //     <br/>
        //     <br/>

        //     <label className="c3 ap-fon">End Date</label>
        //     <br/>
          
        //     <input type="text" className="c1 ap-he-wd form-control  " autoComplete="off" value={userRegistration.enddate} onChange={handelinput} required name="enddate"/>
        //     <br/>
        //     <br/>

        //     <label className="c3 ap-fon">Purpose</label>         
        //     <br/> 
        //     <input type="text"  className="c1 ap-he-wd form-control  " autoComplete="off" value={userRegistration.purpose} onChange={handelinput} required name="purpose"/>
        //     <br/>
        //     <br/>

        //     <label className="c3 ap-fon">Status</label>         
        //     <br/> 
        //     <input type="text"  className="c1 ap-he-wd form-control  " autoComplete="off" value={userRegistration.status}  required name="status" disabled/>
        //     <br/>
        //     <br/>
                
        //     <div>
        //        <button type="submit" id="submit" className='ap-he-wd btn btn-light btn-outline-secondary btn-block' onClick={PostData}>Submit</button>
        //    </div>
        //    </center>
        // </form>
        // </div>
        <>
        <section class="vh-100 bg-image"
  style={{backgroundImage:"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div class="mask d-flex align-items-center h-auto gradient-custom-3">
    <div class="container h-auto" style={{marginTop:34+"px", marginBottom:20+"px"}}>
      <div class="row d-flex justify-content-center align-items-center h-auto">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6" >
          <div class="card" style={{borderRadius: 15+"px"}}>
            <div class="card-body p-5" >
              <h2 class="text-uppercase text-center mb-5">Apply Holiday Leave</h2>

              <form method='POST'>
              <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Student Name </label>  
                    <input type="text" class="form-control form-control-sm hi"  id="exampleInputEmail1"  value={userRegistration.studentname} onChange={handelinput} required name="studentname" autoComplete="off"   placeholder='Name' />  
          </div> 
                <br/>
           <div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Start Date</label>  
                    <input type="email" class="form-control form-control-sm hi" id="exampleInputPassword1" value={userRegistration.startdate} onChange={handelinput} autoComplete="off"  required name="startdate" placeholder='YYYY-MM-DD'/>  
          </div>  
                <br/>
                
                <div class="form-group">  
                    <label for="exampleInputEmail1" class="para">End Date</label>  
                    <input type="String" class="form-control form-control-sm hi"  id="exampleInputEmail1" value={userRegistration.enddate} onChange={handelinput} autoComplete="off"   required name="enddate" placeholder='YYYY-MM-DD'/>  
          </div> 
                <br/>
         <div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Purpose</label>  
                    <input type="String" class="form-control form-control-sm hi" id="exampleInputPassword1" value={userRegistration.purpose} onChange={handelinput} autoComplete="off"  required name="purpose" placeholder='Purpose'/>  
          </div>  
                <br/>
                <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Status</label>  
                    <input type="String" class="form-control form-control-sm hi"  id="exampleInputEmail1"  autoComplete="off" value={userRegistration.wardenstatus}  required name="wardenstatus" disabled />  
          </div> 
          <br/>
          

                <center> <button type="submit" class="btn bttt gradient-custom-4" onClick={PostData}> Enter </button> </center>

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
export default StudentApplyLeave;