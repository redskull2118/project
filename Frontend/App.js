// import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import SignUp from './Component/SignUp'
import Registration from './Component/Registration'
import Login from './Component/Login';
import Home from './Component/Home';
import About from './Component/About';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
const App = () => {
  // const [users, setUsers] = useState([])
  // const getData = async() => {
  //   const res = await axios.get('/api/users')
  //   setUsers(res.data)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/register' element={<Registration/>}></Route>
        <Route path='/Login' element={<Login/>}></Route> 
        <Route path='/about' element={<About/>}></Route> 
      </Routes>
    </BrowserRouter>
    {/* <div>
      {users.map(u => <h4 key={u._id}>userName : {u.name}</h4>)}  
    </div> */}
    {/* <SignUp/> */}
    {/* // <Registration/>
    // <Login/> */}
    </>
  )
}

export default App




// import Home from './Component/Home'
// import './App.css';
// import Registration from './Component/Registration';

// function App() {
//   return (
//     <div className="App">
//      <Registration/>
//     </div>
//   );
// }

// export default App;
