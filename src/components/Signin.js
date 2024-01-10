import react, {useState}from "react";
import axios from "axios";


const Signin = ({SetToken})=>{

   const [formData,SetFormData]  = useState({Name:"",Email:"",Password:"",ConfirmPassword:""});
   const [message , SetMessage]  = useState();


async function SignInUser(e){

   e.preventDefault();
   
   try{
      const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup" , { name:formData.Name,
   email:formData.Email,
   password:formData.Password});
   console.log(response.data);
   SetMessage(response.data.message);
   SetFormData({Name:"",Email:"",Password:"",ConfirmPassword:""});
   SetToken(response.data.data.token);
   }
   catch(error){
      console.log(error.response.data.message);
      SetMessage(error.response.data.message);
   }
}


function fromupdate(e)
{

   SetFormData({...formData,[e.target.name]:e.target.value});
   console.log(formData.Name,formData.Email,formData.Password,formData.ConfirmPassword);

}




   return <div>

      <h1>Form</h1>

      {
         message && <h3>{message}</h3>
      }

      <form onSubmit={SignInUser}>
         <input onChange={fromupdate} placeholder="Name"            name="Name"            value={formData.Name           }  type="text"    />  <br/>
         <input onChange={fromupdate} placeholder="Email"           name="Email"           value={formData.Email          }  type="email"   />  <br/>
         <input onChange={fromupdate} placeholder="Password"        name="Password"        value={formData.Password       }  type="password"/>  <br/>
         <input onChange={fromupdate} placeholder="ConfirmPassword" name="ConfirmPassword" value={formData.ConfirmPassword}  type="password"/>   <br/>

         <button type="submit">Submit</button> 
      </form>
   </div>
} 


export default Signin;