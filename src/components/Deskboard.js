import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Deskboard = () => {
  const [jokes, SetJokes] = useState();
  const [message, SetMessage] = useState();
  const { SetToken, token } = useContext(UserContext);
  const [name, SetName] = useState("");
  const navigate = useNavigate();
  console.log(token);
  

  useEffect(()=>{
    if(token==""){

      const localStrogeToken = localStorage.getItem("token")
        if(localStrogeToken == undefined){
          navigate("/Login");
        }
        else{
          SetToken(JSON.parse(localStrogeToken));
        }
    }
  },[token])

  useEffect(() => {
    if(token != ""){
      jukuMessage();
    }
 
  }, [token]);

  async function logout() {
    try {
      const response = await axios.get(
        "https://instagram-express-app.vercel.app/api/auth/zuku",
        { headers: { authorization: `Bearer ${token}` } }
      );

      alert("logout successfully");
      localStorage.removeItem("token");
      SetName("");
      SetJokes("");
      SetToken("");
    } catch (error) {
      console.log(error);
    }
  }

  async function jukuMessage() {
    try {
      const response = await axios.get(
        "https://instagram-express-app.vercel.app/api/auth/zuku",
        { headers: { authorization: `Bearer ${token}` } }
      );
      SetJokes(response.data.data.message);
      SetName(response.data.data.user.name);
    } catch (error) {
      console.log(error.response.data.message);
      SetMessage(error.response.data.message);
    }
  }

  return (
    <div>
      {name && <h1>Welcome {name}</h1>}

      {(jokes && <p>{jokes}</p>) || (message && <p>{message}</p>)}

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Deskboard;
