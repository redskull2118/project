import React from 'react'
// import axios from 'axios'
import SignUp from './Component/SignUp'
import Registration from './Component/Registration'
import Login from './Component/Login';
import Home from './Project/Home';
import About from './Component/About';
import Try1 from './Component/Try1';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Admin from './Project/Admin';
import WardenRegister from './Project/WardenRegister';


import HodRegister from './Project/HodRegister';

// import ComponentF from './Component/ComponentF';
// import ComponentE from './Component/ComponentE';
export const userContext =React.createContext();
export const ChannelContext =React.createContext();
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
    {/* <userContext.Provider value={"name"}>
    <ComponentF/>
    </userContext.Provider>
    <ChannelContext.Provider value={"hsdjhsfkgsdhjdsffhhsdjdfsdsj"}>
    <userContext.Provider value={"name"}>
      <ComponentE/>
      </userContext.Provider>
      </ChannelContext.Provider> */}
    <BrowserRouter>
      <Routes>
      {/* <Route exact path='/' element={<Try1 name="Parvez"/>}></Route> */}

        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/register' element={<Registration/>}></Route>
        <Route exact path='/admin' element={<Admin/>}></Route>
        <Route path='/Login' element={<Login/>}></Route> 
        <Route path='/wardenregister' element={<WardenRegister/>}></Route> 
        <Route path='/Hodregister' element={<HodRegister/>}></Route> 
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
