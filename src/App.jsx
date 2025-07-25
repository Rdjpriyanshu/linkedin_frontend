import React,{useContext} from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login';
import Home from './pages/Home';
import { userDataContext } from './context/UserContext';
function App() {
  let { userData,loading } = useContext(userDataContext);
  if(loading){
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="text-xl font-semibold text-blue-700">Loading...</div>
      </div>
    );
  }
 
  return (
   
      <Routes>
        <Route path="/" element={userData?<Home/>:<Navigate to ="/login" replace/>} />
        <Route path="/signup" element={userData?<Navigate to="/" replace/>:<Signup/>} />
        <Route path="/login" element={userData?<Navigate to="/" replace/>:<Login/>} />
      </Routes>
  
  )
}

export default App;
