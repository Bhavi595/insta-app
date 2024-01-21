import React ,{useState} from "react";
import UserContext from "./UserContext";



const UserProvider = (props)=>{

  


    const [token , SetToken] = useState("");

     return <UserContext.Provider value={{token,SetToken}}>
                  {props.children}
    </UserContext.Provider>
}

export default UserProvider;