import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { userDataContext } from "../context/userContext";

function Login() {
   let [show,setShow]=useState(false);
    let navigate=useNavigate()
    let {serverUrl}=useContext(authDataContext)
  let {userData,setUserData}=useContext(userDataContext);
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let [loading,setloading]=useState(false);
    let [error,seterr]=useState("");
  
    const handleSignIn=async(e)=>{
      e.preventDefault();
      setloading(true);
      console.log("sending data: ", {
       
        email,
        password,
      });
      try{   
        let result=await axios.post(serverUrl+"/api/auth/login",{
        
          email,
          password
        },{withCredentials:true})
        console.log(result);
        setUserData(result.data);
        navigate("/")
        seterr("");
        setloading(false);
     
        setemail("")
        setpassword("")
   
      }catch(error){
          seterr(error.response.data.message);
          setloading(false);
      }
    }
    return (
      <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-start gap-6">
        <div className="p-4 lg:p-6 w-full h-[80px] flex items-center shadow-sm bg-white/80">
          <img
            src={"/assets/logo.svg"}
            alt="Logo"
            className="w-12 h-12 object-contain rounded-lg shadow border border-gray-200"
          />
        </div>
        <form
          className="w-[90%] max-w-[400px] min-h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-5 px-8 py-10 border border-gray-100"
          onSubmit={handleSignIn}
        >
          <h1 className="text-4xl font-bold text-blue-700 mb-2 tracking-wide">
            Sign IN
          </h1>

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <div>
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <span
              className="absolute cursor-pointer right-[538px] top-[348px] text-[#10c1f7] font-semibold"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? "hidden" : "show"}
            </span>
          </div>

          {error && <p className="text-center text-red-500">*{error}</p>}

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign IN"}
          </button>
          <p
            className="text-center cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Want to create a new account ?{" "}
            <span className="text-[#24b2ff]">Sign Up</span>
          </p>
        </form>
      </div>
    );
  }

export default Login
