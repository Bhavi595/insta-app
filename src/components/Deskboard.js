import React, { useState } from "react";
import axios from "axios";
import Logout from "./Logout";

const Deskboard = ({token})=>{

   const [jokes   , SetJokes  ] = useState();
   const [message , SetMessage] = useState();

   async function jukuMessage(){
       
     try{
        const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku" ,
        {headers:{"authorization":`Bearer ${token}`},
        }
       );
       SetJokes(response.data.data.message);
      }

      catch(error){
        console.log(error.response.data.message);
        SetMessage(error.response.data.message);
      }
    
   }


    return <div>
    <h1>Deskboard</h1>

    {
        jokes && <p>{jokes}</p> || message && <p>{message}</p>
    }

    <button onClick={jukuMessage}>Get Jokes</button>

    <Logout/>
   

    </div>
}

export default Deskboard;
