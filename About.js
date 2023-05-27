import { useEffect ,useState} from "react";

import {useNavigate} from 'react-router-dom';
function About(){
    const [data,setData]= useState({});
    let navigate=useNavigate();
    const callAboutPage= async ()=>{
        try{

            const res= await fetch('/about' ,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
          
            });
            const data1= await res.json();
            console.log(data1);
            setData(data1);
            if(!res.status===200){
                const error= new Error(res.error);
                throw error;
            }
        }

        catch(err){
            console.log(err);
            navigate('/studentlogin');
        }
    }
 useEffect(()=>{
    callAboutPage();
 },[]);
    return(
        <>
          <h1>Hi I am about page</h1>
          <h5>{data.username}</h5>
          <h5>{data.email}</h5>
          <h5>{data.Department}</h5>
          <h5>{data.wardenstatus}</h5>
          <h5>{data.hodstatus}</h5>
          <h5>{data.startdate}</h5>
          {/* <h5>{data.age}</h5> */}
          {/* <h5>{data.tokens}</h5>
         <ul>  {
            data.tokens.map(a=>{
                <li>{a.token}</li>
            })
          }
          </ul> */}
        </>
    )
}
export default About;