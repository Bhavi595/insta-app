import react, {useState,useContext}from "react";
import axios from "axios";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
   const {SetToken} = useContext(UserContext);
   const [loginData,SetLoginData]  = useState({Email:"",Password:""});
   const [message , SetMessage]  = useState();
   const navigate = useNavigate();
  


async function LogInUser(e){

   e.preventDefault();
   
   try{
      const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login" , {
   email:loginData.Email,
   password:loginData.Password});


   console.log(response.data.message);
   SetMessage(response.data.message);
   SetLoginData({Email:"",Password:""})
   SetToken(response.data.data.token);
   const JsonToken = JSON.stringify(response.data.data.token);
   localStorage.setItem("token",JsonToken);
   navigate("/Deskboard"); 
   }
   catch(error){
      console.log(error.response.data.message);
      SetMessage(error.response.data.message);
   }
}


function fromupdate(e)
{

   SetLoginData({...loginData,[e.target.name]:e.target.value});
   console.log(loginData.Email,loginData.Password);

}




   return <div>

      <h1>Login</h1>

      {
         message && <h3>{message}</h3>
      }

      <form onSubmit={LogInUser}>
       
         <input onChange={fromupdate} placeholder="Email"           name="Email"           value={loginData.Email          }  type="email"   />  <br/>
         <input onChange={fromupdate} placeholder="Password"        name="Password"        value={loginData.Password       }  type="password"/>  <br/>
         <div>Create Account <span style={{color:"blue"}} onClick={()=>(navigate("/"))}>Signin</span></div>
         <button type="submit">Submit</button> 
      </form>
   </div>
} 


export default Login;